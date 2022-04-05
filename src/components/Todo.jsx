import { AiFillDelete } from 'react-icons/ai'
import { FcHighPriority, FcLowPriority } from 'react-icons/fc'
import { ListGroup } from "react-bootstrap"
import "../App.css"

const Todo = ({todo, onDelete, onToggle }) => {

    return (
    <div  onDoubleClick={() => onToggle(todo.id)}>
            <h3>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                        {todo.todoTitle}
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        {todo.description}
                    </ListGroup.Item>
                </ListGroup>
                <div className='bin'>
                    <AiFillDelete size={40} style={{ color: 'black', cursor: 'pointer'}} onClick={() => onDelete(todo.id)} />
                    {todo.high ? <FcHighPriority size={40} style={{ color: 'red', cursor: 'pointer'} }/>: <FcLowPriority size={40} style={{ color: 'green', cursor: 'pointer'}} /> }
                </div>
            </h3>
            <p></p>
        </div>
    )
}

export default Todo