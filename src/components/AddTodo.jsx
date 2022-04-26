import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import "../App.css"

const AddTodo = ({ onAdd }) => {
    // the state of the todo's title, description and priority 
    const [todotitle, setTodoTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setHighPriority] = useState(false)
    const [trash, setTrash] = useState(false)

    // sets todo state on submit
    const onSubmit = (e) => {
        e.preventDefault()
        // alert for improperly filled todo form
        if(!todotitle) {
            alert('Please add a task todo!')
            return
        }
        if(!description) {
            alert('Please add a description!')
            return
        }
        // resets the form to blank
        onAdd({ todotitle, description, priority, trash })
        setTodoTitle("")
        setDescription("")
        setHighPriority(false)
        setTrash(false)
    }

    return (
        // data is captured and state set in onSubmit
        <Form onSubmit={onSubmit} >
        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
                Todo Title
            </Form.Label>
            <Col sm={10}>
                {/* captures todo title input */}
                <Form.Control type="text" placeholder="Todo" value={todotitle} onChange={(e) => setTodoTitle(e.target.value)} />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
                Todo Description 
            </Form.Label>
            <Col sm={10}>
                {/* captures todo description input */}
                <Form.Control as="textarea" rows={3} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm={2}>
                {"High Priority"}
            </Form.Label>
            <Col className='check' >
                {/* captures high priority input */}
                <Form.Check.Input
                    aria-label="option 1"
                    id="formHorizontalRadios1"
                    checked={ priority } value={priority} onChange={(e) => setHighPriority(e.currentTarget.checked)}
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