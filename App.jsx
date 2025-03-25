import React , {UseState} from "react";
import './App.css';

function app ()
{
    const [counter, setCounter]=UseState(0);
    const incrementCounter=() => {
        setCounter(counter+1);
    };
    return(
    <div className="MY APP">
       <h1>Welcome to react</h1>
       <p>Current Counter: {counter}</p>
       <button onClick={incrementCount}>Increment Counter</button>
       

    </div>
    );
}
export default app;
