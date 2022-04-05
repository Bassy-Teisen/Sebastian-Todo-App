import Header from './components/Header'
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false)


  return (
    <div className="App">
        <Header showAdd={showAddTodo} onAdd={() => setShowAddTodo(!showAddTodo) } title={"Todo App"}/>
        <Container >
          <Row className="justify-content-center" >
              {showAddTodo && <AddTodo /> }
          </Row>
      </Container>
    </div>
  )
}

export default App
