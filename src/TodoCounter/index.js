import './TodoCounter.css';

function TodoCounter( {total, completed} ){
    return (
        total == completed 
        ? 
            <h2 className="TodoCounter">Has completado todos los TODOs!!! ❤️</h2>
        :
            <h2 className="TodoCounter"> 
            Has completado<span> {completed} </span>
            de <span>{total} </span> TODOs  
            </h2>
    );
}

export { TodoCounter };