import Header from './components/Header'
import { useState, useEffect, useContext, createContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import DeletedTodos from './components/DeletedTodos'

const TodosContext = createContext() 

export function useTodosContext () {
  return useContext(TodosContext)
}


function App() {
  // used in logic for displaying click to add button
  const [showAddTodo, setShowAddTodo] = useState(false)
  // used to set the todos fetched from derver
  const [todos, setTodos] = useState([])
  // used to set todos that have been sent to trash/bin
  const [binTodos, setBinTodos] = useState(false)

  // useEffect(async () =>  {
  //   const res = await fetch('http://localhost:5000/todos')
  //   const data = await res.json()
  //   setTodos(data)
  // }, [])





  // retrieves todos from server via fetchTodos
  useEffect(() => {
    const getTodos = async () => {
      const todosFromAPI = await fetchTodos()
      setTodos(todosFromAPI)
    }
    // calls function which returns todos using async await 
    getTodos()
  }, [])

  // fetches todos from json-server 
  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()

    return data
  }
  
  // fetches individual todo 
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`)
    const data = await res.json()

    return data
  }

  // creates new todos to db.json file via json-server
  const addTodo = async (todo) => {
    const res = await fetch("http://localhost:5000/todos", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })

    const data = await res.json()

    setTodos([...todos, data])
  }

  // deletes individual todo by id
  const deleteTodo = async (id) => {
    
    const res = await fetch(`http://localhost:5000/todos/${id}`, 
    { method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
    })


    setTodos(todos.filter((todo) => todo.id !== id))
    console.log(res)
  }

  // toggles the priority low priority of the todo
  const togglePriority = async (id) => {
    const todoToToggle = await fetchTodo(id)
    const updTodo = {...todoToToggle, priority: !todoToToggle.priority}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      method: 'PUT', 
       
      body: JSON.stringify({updTodo}) })
      
      const data = await res.json()
    
    setTodos(todos.map((todo) => todo.id === id ? {...todo, priority: !todo.priority} : todo))
  }

  // used for changing trash from false to true as means of sending to trash 
  const sendToTrash = async (id) => {
    const trashTodo = await fetchTodo(id)
    const upDatetrash = {...trashTodo, trash: true}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(upDatetrash) })

    setTodos(todos.map((todo) => todo.id === id ? {...todo, trash: true} : todo))
  }

  // used for changing trash from true to false as means of sending back from trash
  const sendBack= async (id) => {
    const trashTodo = await fetchTodo(id)
    const upDatetrash = {...trashTodo, trash: false}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(upDatetrash) })

    setTodos(todos.map((todo) => todo.id === id ? {...todo, trash: false} : todo))
  }

  return (
    <BrowserRouter > 
    <div className="App">
      <Header showAdd={showAddTodo} onAdd={() => setShowAddTodo(!showAddTodo) } title={"Todo App"}/>
      <Routes>
          <Route  path='/' element={
            <TodosContext.Provider value={todos} >
              <Home sendToTrash={sendToTrash} addTodo={addTodo} todos={todos} togglePriority={togglePriority} deleteTodo={deleteTodo} showAddTodo={showAddTodo} />
            </TodosContext.Provider>
            }/>
          <Route path='/DeletedTodos'  element={
            <TodosContext.Provider value={todos} >
              <DeletedTodos sendBack={sendBack} onDelete={deleteTodo}  todos={todos}/>
            </TodosContext.Provider>
            }/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
