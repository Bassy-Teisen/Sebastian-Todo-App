import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import TodoDelete from "./TodoDelete"

const DeletedTodos = ({todos, onDelete, onToggle }) => {

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
            <>
                {trashList.map((todo, index) => (
                    <Card  key={index} style={{ maxWidth: '40%', minWidth: "300px" }}>
                        <Card.Body ><TodoDelete key={index} todo={todo} onDelete={onDelete} onToggle={onToggle} /></Card.Body> 
                    </Card>
                ))}
                <Link to="/">Go Back</Link>
            </>
        )
    }
 
export default DeletedTodos