import Button from 'react-bootstrap/Button'

const TodoButton = ({color, text, onClick}) => {
    
    return (
        <div className='addButton'>
            {/* button used to open add todo form */}
            <Button style={{ backgroundColor: color}} className="button" onClick={onClick} >{text}</Button>
        </div>
    )
}

export default TodoButton 