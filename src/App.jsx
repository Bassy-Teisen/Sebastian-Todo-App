import Header from './components/Header'
import { useState } from 'react'
import './App.css'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)


  return (
    <div className="App">
        <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask) } title={"Todo App"}/>
    </div>
  )
}

export default App
