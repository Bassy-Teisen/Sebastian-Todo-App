import { Container, Card } from "react-bootstrap"
import Todo from "./Todo"
import '../App.css'

const Todos = ({todos, onDelete, onToggle }) => {

    const sortTop = []
    const sortLow = []
    for (const [index, value] of todos.entries()) {
        {value.high ? sortTop.push(value) : sortLow.push(value)}
    }

    const todoList = [...sortTop, ...sortLow]
    return (
        <>
            {todoList.map((todo, index) => (
                <Card key={index} style={{ maxWidth: '40%', minWidth: "300px" }}>
                    <Card.Body><Todo key={index} todo={todo} onDelete={onDelete} onToggle={onToggle} /></Card.Body> 
                </Card>
            ))}
        </>
    )
}

export default Todos