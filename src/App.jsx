import Header from './components/Header'
import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'



function App() {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([])

  
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
  return (
    <BrowserRouter > 
    <div className="App">
      <Header showAdd={showAddTodo} onAdd={() => setShowAddTodo(!showAddTodo) } title={"Todo App"}/>
      <Routes>
          <Route  path='/' element={<Home addTodo={addTodo} todos={todos} togglePriority={togglePriority} deleteTaodo={deleteTodo} showAddTodo={showAddTodo} />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
