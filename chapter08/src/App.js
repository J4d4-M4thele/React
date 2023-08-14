import React, { Component } from 'react';
import GitHub from './GitHub';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GitHubUser from './GitHubUser';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default App;

//return header in app
class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* Navigation bar */}
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/github">GitHub</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* routes(home page, home and NotFound page) */}
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route exact path="/about" component={About} />
            {/* displays when non-existant route is typed in */}
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

//homepage contents
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

//notFound page contents
class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>More about us on this page</h1>
      </div>
    )
  }
}
