import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import "../App.css"

const AddTodo = ({ onAdd }) => {
    const [todo, setTodo] = useState('')
    const [description, setDescription] = useState('')
    const [high, setHighPriority] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!todo) {
            alert('Please add a task todo!')
            return
        }
        if(!description) {
            alert('Please add a description!')
            return
        }
        onAdd({ todo, description, high })
        setTodo("")
        setDescription("")
        setHighPriority(false)
    }

    return (
        <Form onSubmit={onSubmit} >
        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
                Todo Task
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder="Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
                Todo Description 
            </Form.Label>
            <Col sm={10}>
                <Form.Control as="textarea" rows={3} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
                {"High Priority"}
            </Form.Label>
            <Col className='check' >
                <Form.Check.Input
                    aria-label="option 1"
                    id="formHorizontalRadios1"
                    checked={ high } value={high} onChange={(e) => setHighPriority(e.currentTarget.checked)}
                />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
            <Col >
                <Button type="submit">Add Todo</Button>
            </Col>
        </Form.Group>
        </Form>
    )
}
export default AddTodo