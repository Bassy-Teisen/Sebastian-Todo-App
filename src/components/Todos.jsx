import { Card } from "react-bootstrap"
import Todo from "./Todo"
import '../App.css'

const Todos = ({todos, sendToTrash, onToggle }) => {
    
    // sorts the todos that have not been sent to trash
    const notTrashList = []
    for (const [index, value] of todos.entries()) {
        {value.binTodo ? "" : notTrashList.push(value) }
    }
    
    // sorts high priority from low priority
    const sortTop = []
    const sortLow = []
    for (const [index, value] of notTrashList.entries()) {
        {value.high ? sortTop.push(value) : sortLow.push(value)}
    }

    // merges the high and low prority todos together
    const todoList = [...sortTop, ...sortLow]

    return (
        <>
            {/* maps over the individual todos for display */}
            {todoList.map((todo, index) => (
                <Card  key={index} style={{ maxWidth: '40%', minWidth: "300px" }}>
                    <Card.Body ><Todo key={index}  todo={todo} sendToTrash={sendToTrash} onToggle={onToggle} /></Card.Body> 
                </Card>
            ))}
        </>
    )
}

export default Todos