import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter( ){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return (
        totalTodos === completedTodos 
        ? 
            <h2 className="TodoCounter">Has completado todos los TODOs!!! ❤️</h2>
        :
            <h2 className="TodoCounter"> 
            Has completado<span> {completedTodos} </span>
            de <span>{totalTodos} </span> TODOs  
            </h2>
    );
}

export { TodoCounter };