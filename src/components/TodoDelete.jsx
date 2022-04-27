import { TiTick, TiDeleteOutline } from 'react-icons/ti'
import { ListGroup } from "react-bootstrap"
import "../App.css"

const TodoDelete = ({todo, sendBack, onDelete }) => {

    return (
        <div className='max' >
            <ListGroup as="ul">
                <ListGroup.Item as="li" >
                    {/* displays todo title */}
                    <h2>{todo.todotitle}</h2>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-start" as="li">
                    {/* displays todo description */}
                    <p>{todo.description}</p>
                </ListGroup.Item>
            </ListGroup>
            <div className='bin'>
                {/* deletes of todo from list*/}
                <TiDeleteOutline size={40} style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(todo.id)} />
                <div>
                    {/* adds todo pack to list */}
                    <h6 className='double'>Click To Add Back To List</h6>
                    <TiTick onClick={() => sendBack(todo.id)} size={40} style={{ color: 'green', cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}

export default TodoDelete