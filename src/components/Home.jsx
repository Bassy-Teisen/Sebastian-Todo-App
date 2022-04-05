import { Container, Row } from 'react-bootstrap'
import Todos from "./Todos"
import AddTodo from "./AddTodo"

const Home = ({ addTodo, todos,sendToTrash, binTodos, togglePriority, deleteTodo, showAddTodo}) => {
    return (
        <Container >
            <Row className="justify-content-center" >
                {showAddTodo && <AddTodo onAdd={addTodo}  /> }
                {todos.length >0 ? <Todos binTodos={binTodos} sendToTrash={sendToTrash} todos={todos} onDelete={deleteTodo} onToggle={togglePriority} /> : "No todos to show"}
            </Row>
        </Container>
    )
}

export default Home