import React, { Component } from 'react';
import Products from './Products';
class App extends Component {
  //render function allows html to display in broweser
  render() {
    return (
      <div>
        <h1>My First React App!</h1>
        <Products />
      </div>
    );
  }
}
export default App;