import { AiFillDelete } from 'react-icons/ai'
import { FcHighPriority, FcLowPriority } from 'react-icons/fc'
import { ListGroup } from "react-bootstrap"
import "../App.css"

const Todo = ({todo, sendToTrash,  onToggle }) => {
    
    return (
        // captures the toggle of high to low priority
    <div  onDoubleClick={() => onToggle(todo.id)}>
            
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                        {/* title of todo passed displayed */}
                        <h2>{todo.todotitle}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-start" as="li">
                        {/* description of todo passed displayed */}
                        <p>{todo.description}</p>
                    </ListGroup.Item>
                </ListGroup>
                <div className='bin'>
                    {/* captures todo being sent to trash */}
                    <AiFillDelete size={40} style={{ color: 'black', cursor: 'pointer'}} onClick={() => sendToTrash(todo.id)} />
                    <div>
                        {/* toggles high low priority of todo */}
                        <h6 className='double'>Double Click To Change Priority</h6>
                        {todo.priority ? <FcHighPriority  size={40} style={{ color: 'red', cursor: 'pointer' } }/>: <FcLowPriority size={40} style={{ color: 'green', cursor: 'pointer'}} /> }
                    </div>
                </div>
            <p></p>
        </div>
    )
}

export default Todo