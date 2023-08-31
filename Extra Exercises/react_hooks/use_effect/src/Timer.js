import { useState, useEffect } from "react";

// function Timer() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         //runs on every render
//         setTimeout(() => {
//             //increases by 1 every second
//             setCount((count) => count + 1);
//         }, 1000);
//     });


//     return <h1>I've rendered {count} times!</h1>;
// }

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    return <h1>I've rendered {count} times!</h1>;
}

export default Timer;