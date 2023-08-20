//import logo from './logo.svg';
import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import WeatherApp from "./WeatherApp";

class App extends React.Component {
  render(){
  return (
    <WeatherApp />
  );
  }
}

export default App;