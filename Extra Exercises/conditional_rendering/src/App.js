import './App.css';
import React from 'react';
import Garage from './Garage';

function App() {
  const cars = ['Mercedes-Benz', 'BMW', 'Audi', 'Porsche'];
  //return <Goal isGoal={true}/>
  return <Garage cars={cars}/>
}

export default App;
