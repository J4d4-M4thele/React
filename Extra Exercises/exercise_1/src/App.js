import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  //connects to root div in index.html
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<p>Hello</p>);
}

export default App;
