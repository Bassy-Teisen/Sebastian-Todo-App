import { Card, Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import TodoDelete from "./TodoDelete"

const DeletedTodos = ({todos, onDelete, sendBack, onToggle }) => {

        const trashList = []
        for (const [index, value] of todos.entries()) {
            {value.binTodo ? trashList.push(value) : "" }
        }
        const sortTop = []
        const sortLow = []
        for (const [index, value] of trashList.entries()) {
            {value.high ? sortTop.push(value) : sortLow.push(value)}
        }
    
        const todoList = [...sortTop, ...sortLow]

        return (
            <Container >
                <Row className="justify-content-center" >
                {trashList.map((todo, index) => (
                    
                    <Card  key={index} style={{ maxWidth: '40%', minWidth: "300px" }}>
                        <Card.Body ><TodoDelete sendBack={sendBack} key={index} todo={todo} onDelete={onDelete} onToggle={onToggle} /></Card.Body> 
                    </Card>
                ))}
                </Row>
                <Link to="/">Go Back</Link>
                </Container>
        )
    }
 
export default DeletedTodos