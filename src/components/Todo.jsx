import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'
import { FcHighPriority, FcLowPriority } from 'react-icons/fc'
import { ListGroup } from "react-bootstrap"
import "../App.css"

const Todo = ({todo, sendToTrash, onDelete, onToggle }) => {
    
    return (
    <div  onDoubleClick={() => onToggle(todo.id)}>
            
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                        <h2>{todo.todoTitle}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-start" as="li">
                        <p>{todo.description}</p>
                    </ListGroup.Item>
                </ListGroup>
                <div className='bin'>
                    <AiFillDelete size={40} style={{ color: 'black', cursor: 'pointer'}} onClick={() => sendToTrash(todo.id)} />
                    <div>
                    <h6 className='double'>Double Click</h6>
                    {todo.high ? <FcHighPriority size={40} style={{ color: 'red', cursor: 'pointer'} }/>: <FcLowPriority size={40} style={{ color: 'green', cursor: 'pointer'}} /> }
                    </div>
               
            </div>
            <p></p>
        </div>
    )
}

export default Todo