import TodoButton from "./TodoButton"

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
               <div className='add'>
                    
                    <TodoButton color={showAdd ? "red" : "green"} text={showAdd ? "close" : "Add" } onClick={onAdd}/>          
                </div>
        </header>
    )

}

export default Header 