import Header from './components/Header'
import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import DeletedTodos from './components/DeletedTodos'

function App() {
  // used in logic for displaying click to add button
  const [showAddTodo, setShowAddTodo] = useState(false)
  // used to set the todos fetched from derver
  const [todos, setTodos] = useState([])
  // used to set todos that have been sent to trash/bin
  const [binTodos, setBinTodos] = useState(false)

  // retrieves todos from server via fetchTodos
  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos()
      setTodos(todosFromServer)
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
    await fetch(`http://localhost:5000/todos/${id}`, 
    { method: 'DELETE'
    })

    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // toggles the high low priority of the todo
  const togglePriority = async (id) => {
    const todoToToggle = await fetchTodo(id)
    const updTodo = {...todoToToggle, high: !todoToToggle.high}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(updTodo) })

    const data = await res.json()

    setTodos(todos.map((todo) => todo.id === id ? {...todo, high: !todo.high} : todo))
  }

  // used for changing binTodo from false to true as means of sending to trash 
  const sendToTrash = async (id) => {
    const trashTodo = await fetchTodo(id)
    const upDateBinTodo = {...trashTodo, binTodo: true}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(upDateBinTodo) })

    const data = await res.json()

    setTodos(todos.map((todo) => todo.id === id ? {...todo, binTodo: true} : todo))
  }

  // used for changing binTodo from true to false as means of sending back from trash
  const sendBack= async (id) => {
    const trashTodo = await fetchTodo(id)
    const upDateBinTodo = {...trashTodo, binTodo: false}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(upDateBinTodo) })

    const data = await res.json()

    setTodos(todos.map((todo) => todo.id === id ? {...todo, binTodo: false} : todo))
  }

  return (
    <BrowserRouter > 
    <div className="App">
      <Header showAdd={showAddTodo} onAdd={() => setShowAddTodo(!showAddTodo) } title={"Todo App"}/>
      <Routes>
          <Route  path='/' element={<Home sendToTrash={sendToTrash} addTodo={addTodo} todos={todos} togglePriority={togglePriority} deleteTodo={deleteTodo} showAddTodo={showAddTodo} />}/>
          <Route path='/DeletedTodos'  element={<DeletedTodos sendBack={sendBack} onDelete={deleteTodo} binTodos={binTodos} todos={todos}/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
