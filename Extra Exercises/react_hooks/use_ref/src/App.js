import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

/****DOESN'T ALLLOW FOR RERENDERING****/
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   //useRef hook allows you to persist values between renders
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

/****ACCESSING DOM ELEMENTS****/
// function App() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

/****TRACKING STATE CHANGES****/
function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}


export default App;