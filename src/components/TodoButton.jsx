import Button from 'react-bootstrap/Button'

const TodoButton = ({color, text, onClick}) => {

    
    return (
        <div>
            <Button style={{ backgroundColor: color}} className="button" onClick={onClick} >{text}</Button>
        </div>
    )
}

TodoButton.defaultProps = {
    color: 'purple',
    text: "default test"
}

export default TodoButton 