import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import User from './User';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserForm from './UserForm';


class App extends Component {
  constructor() {
    super()
    console.log(firebase);
  }

  render() {
    return (
      <div>
        {/* paths */}
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/edit/:id" component={UserForm} />
              <Route path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
//rendered for unfamiliar paths
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}