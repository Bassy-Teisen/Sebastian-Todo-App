import React, { useState, useContext } from 'react'

const PriorityContext = React.createContext()
const BinContext = React.createContext()

export function usePriorityContext () {
    return useContext(PriorityContext)
}

export function useBinContext () {
    return useContext(BinContext)
}

const TodoValue = ({ children }) => {
    const [todos, setTodos] = useState([])

    

    return (
        <PriorityContext.Provider >
            <BinContext >
                { children }
            </BinContext>
        </PriorityContext.Provider>
    )
}

export default TodoValue