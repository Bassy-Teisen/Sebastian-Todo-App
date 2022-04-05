import Button from 'react-bootstrap/Button'

const TodoButton = ({color, text, onClick}) => {


    return (
        <header className="header">
            <Button style={{ backgroundColor: color}} className="button" onClick={onClick} >{text}</Button>
        </header>
    )
}

TodoButton.defaultProps = {
    color: 'purple',
    text: "default test"
}

export default TodoButton 