import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//props stands for properties
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
//pass value into car component (function)
//const myElement = <Car brand="Ford" />;

function Garage() {
  return (
    <>
    <h1>Who lives in my garage?</h1>
    <Car brand="Ford" />
    </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

export default App;