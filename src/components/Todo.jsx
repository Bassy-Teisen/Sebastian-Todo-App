import { AiFillDelete } from 'react-icons/ai'
import { ListGroup } from "react-bootstrap"
import "../App.css"

const Todo = ({todo, onDelete, onToggle }) => {

    return (
    <div  onDoubleClick={() => onToggle(todo.id)}>
            <h3>
                <ListGroup as="ul">
                        {todo.high ? <ListGroup.Item as="li" variant="danger" >High</ListGroup.Item> : <ListGroup.Item as="li" variant="info" >Low</ListGroup.Item>}
                    <ListGroup.Item as="li" >
                        {todo.todoTitle}
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        {todo.description}
                    </ListGroup.Item>
                </ListGroup>
                <div className='bin'>
                    <AiFillDelete size={40} style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(todo.id)} />
                </div>
            </h3>
            <p></p>
        </div>
    )
}

export default Todo