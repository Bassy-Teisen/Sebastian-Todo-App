import TodoButton from "./TodoButton"
import { useLocation } from 'react-router-dom' 


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header >
            <h1 className="app">{title}</h1>
               <div className='add'>
                    {!showAdd && location.pathname === '/' ? <h3 className='click' >Click to Add a Todo</h3> : ""}
                    {location.pathname === '/' && <TodoButton color={showAdd ? "red" : "green"} text={showAdd ? "close" : "Add" } onClick={onAdd}/> }         
                </div>
        </header>
    )

}

export default Header 