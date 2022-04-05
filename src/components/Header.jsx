import TodoButton from "./TodoButton"
import { useLocation } from 'react-router-dom' 


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header >
            <h1 className="app">{title}</h1>
               <div className='add'>
                    {/* logic for displaying the add todo button and text */}
                    {!showAdd && location.pathname === '/' ? <h3 className='click' >Click to Add a Todo</h3> : ""}
                    {location.pathname === '/' && <TodoButton color={showAdd ? "red" : "green"} text={showAdd ? "close" : "Add" } onClick={onAdd}/> }    
                    {location.pathname === '/DeletedTodos' ? <h2>Deleted Todos</h2> : ""}
                </div>
        </header>
    )

}

export default Header 