import { Card, Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import TodoDelete from "./TodoDelete"
import { useTodosContext } from "../App"


const DeletedTodos = ({ onDelete, sendBack, onToggle }) => {

        const todos = useTodosContext()
        // sorts out the todos sent to trash and stores them in trashlist
        const trashList = []
        for (const [index, value] of todos.entries()) {
            {value.trash ? trashList.push(value) : "" }
        }

        return (
            <Container >
                <Row className="justify-content-center" >
                {/* used to display individual todos */}
                {trashList.map((todo, index) => (
                    <Card  key={index} style={{ maxWidth: '40%', minWidth: "300px" }}>
                        <Card.Body ><TodoDelete sendBack={sendBack} key={index} todo={todo} onDelete={onDelete} onToggle={onToggle} /></Card.Body> 
                    </Card>
                ))}
                </Row>
                <Link style={{ fontSize: "1.5rem" }} to="/">Go Back</Link>
                </Container>
        )
    }
 
export default DeletedTodos