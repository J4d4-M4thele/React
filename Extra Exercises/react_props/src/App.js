import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  //***with JSX***
  // const myElement = <h1>I love JSX!</h1>
  const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);



  //***without JSX***
  //   const myElement = React.createElement('h1', {}, 'I do not use JSX!');

  //   const root = ReactDOM.createRoot(document.getElementById('root'));
  //   root.render(myElement);
}

export default App;
