import Header from './components/Header'
import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import DeletedTodos from './components/DeletedTodos'



function App() {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([])
  const [binTodos, setBinTodos] = useState(false)


  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos()
      setTodos(todosFromServer)

    }
    getTodos()
  }, [])


  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()

    return data
  }
  
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`)
    const data = await res.json()

    return data
  }

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

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, 
    { method: 'DELETE'
    })

    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const togglePriority = async (id) => {
    const todoToToggle = await fetchTodo(id)
    const updTodo = {...todoToToggle, high: !todoToToggle.high}

    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(updTodo) })

    const data = await res.json()

    setTodos(todos.map((todo) => todo.id === id ? {...todo, high: !todo.high} : todo))
  }
  const sendToTrash = async (id) => {
    const trashTodo = await fetchTodo(id)
    const upDateBinTodo = {...trashTodo, binTodo: true}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(upDateBinTodo) })

    const data = await res.json()

    setBinTodos(todos.map((todo) => todo.id === id ? {...todo, binTodo: true} : todo))
  }
  const sendBack= async (id) => {
    const trashTodo = await fetchTodo(id)
    const upDateBinTodo = {...trashTodo, binTodo: false}
    const res = await fetch(`http://localhost:5000/todos/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(upDateBinTodo) })

    const data = await res.json()

    setBinTodos(todos.map((todo) => todo.id === id ? {...todo, binTodo: false} : todo))
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
