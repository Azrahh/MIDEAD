import React , {UseState} from "react";
import CountdownTimer from './CountdownTimer';
import LightSwitch from './LightSwitch'; 
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

function app ()
{
    const [counter, setCounter]=UseState(0);
    const incrementCounter=() => {
        setCounter(counter+1);
    };
    return(
    <div className="MY APP">
       <h1>React Count Down Timer And Light Switch</h1>
       <div className="App container">
       <div className="CountdownTimer">
        <h2>Countdown Timer</h2>
        <p>{timeLeft} seconds left</p>
        <button onClick={() => setIsTimerRunning(true)} disabled={isTimerRunning}>Start</button>
        <button onClick={() => setIsTimerRunning(false)} disabled={!isTimerRunning}>Stop</button>
      </div>
      
        <CountdownTimer initialTime={10}/>
       <LightSwitch/>
       <button onClick={incrementCount}>Increment Counter</button>
       </div>

    </div>
    );
}
export default app;
