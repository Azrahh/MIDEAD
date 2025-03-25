import React , {UseState} from "react";
import './App.css';

function app ()
{
    const [counter, setCounter]=UseState(0);
    const incrementCounter=() => {
        setCounter(counter+1);
    }
}
