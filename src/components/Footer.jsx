import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom' 


const Footer = () => {
    const location = useLocation()

    return (
        <footer>
             {location.pathname === '/' && <Link to="/DeletedTodos">Deleted Todos</Link> }
            <p>Copyright &copy; 2022</p>
        </footer>
    )
}

export default Footer