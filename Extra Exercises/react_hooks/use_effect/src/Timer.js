import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         //increases by 1 every second
    //         setCount((count) => count + 1);
    //     }, 1000);
    // },[]);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    //return <h1>I've rendered {count} times!</h1>;

    return (
        <>
        <p>Count: {count}</p>
        <button onClick={() =>setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
        </>
    );
}

export default Timer;