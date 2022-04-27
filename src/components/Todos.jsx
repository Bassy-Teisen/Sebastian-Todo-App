import { Card } from "react-bootstrap"
import Todo from "./Todo"
import { useTodosContext } from "../App"
import '../App.css'

const Todos = ({ sendToTrash, onToggle }) => {
    
    const todos = useTodosContext()

    // sorts the todos that have not been sent to trash
    const notTrashList = []
    for (const [index, value] of todos.entries()) {
        {value.trash ? "" : notTrashList.push(value) }
    }
    
    // sorts priority priority from low priority
    const sortTop = []
    const sortLow = []
    for (const [index, value] of notTrashList.entries()) {
        {value.priority ? sortTop.push(value) : sortLow.push(value)}
    }

    // merges the priority and low prority todos together
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