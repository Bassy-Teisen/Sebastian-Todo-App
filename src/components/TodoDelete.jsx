import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { ListGroup } from "react-bootstrap"
import "../App.css"

const TodoDelete = ({todo, sendBack, onDelete, onToggle }) => {
    return (
    <div  onDoubleClick={() => sendBack(todo.id)}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                        <h2>{todo.todoTitle}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-start" as="li">
                        <p>{todo.description}</p>
                    </ListGroup.Item>
                </ListGroup>
                <div className='bin'>
                    <AiFillDelete size={40} style={{ color: 'black', cursor: 'pointer'}} onClick={() => onDelete(todo.id)} />
                    <div>
                    <h6 className='double'>Add To List</h6>
                    <TiTick size={40} style={{ color: 'green', cursor: 'pointer'}}/>
                    {/* {todo.high ? <FcHighPriority size={40} style={{ color: 'red', cursor: 'pointer'} }/>: <FcLowPriority size={40} style={{ color: 'green', cursor: 'pointer'}} /> } */}
                    </div>
               
            </div>
            <p></p>
        </div>
    )
}

export default TodoDelete