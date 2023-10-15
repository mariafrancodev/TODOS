import './TodoCounter.css';

function TodoCounter( {total, completed} ){
    return (
        <>
        {/* <h1 className="TodoCounter"> Your Tasks </h1> */}
        <h2 className="TodoCounter"> 
        Has completad<span> {completed} </span>
        de <span>{total} </span> TODOs  
        </h2>
        </>
    );
}

export { TodoCounter };