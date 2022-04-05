import { Container, Row } from 'react-bootstrap'
import Todos from "./Todos"
import AddTodo from "./AddTodo"
import ScrollToTop from "./ScrollToTop"

// used Home comonent to seperate the addTodo and Todos component 
const Home = ({ addTodo, todos,sendToTrash, binTodos, togglePriority, deleteTodo, showAddTodo}) => {
    return (
        // 
        <Container >
            <Row className="justify-content-center" >
                {/* addTodo only shows when showAddTodo is true */}
                {showAddTodo && <AddTodo onAdd={addTodo}  /> }
                {/* conditional display of todos if not shows text */}
                {todos.length >0 ? <Todos binTodos={binTodos} sendToTrash={sendToTrash} todos={todos} onDelete={deleteTodo} onToggle={togglePriority} /> : "No todos to show"}
            </Row>
            <ScrollToTop />
        </Container>
    )
}

export default Home