import { Container, Card } from "react-bootstrap"
import Todo from "./Todo"
import '../App.css'

const Todos = ({todos, sendToTrash, onDelete, onToggle }) => {
    const notTrashList = []
    for (const [index, value] of todos.entries()) {
        {value.binTodo ? "" : notTrashList.push(value) }
    }
    const sortTop = []
    const sortLow = []
    for (const [index, value] of notTrashList.entries()) {
        {value.high ? sortTop.push(value) : sortLow.push(value)}
    }

    const todoList = [...sortTop, ...sortLow]
    return (
        <>
            {todoList.map((todo, index) => (
                <Card  key={index} style={{ maxWidth: '40%', minWidth: "300px" }}>
                    <Card.Body ><Todo key={index}  todo={todo} sendToTrash={sendToTrash} onToggle={onToggle} /></Card.Body> 
                </Card>
            ))}
        </>
    )
}

export default Todos