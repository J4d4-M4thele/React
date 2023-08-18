/******CLASS-BASED COMPONENT***** */
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

// class App extends React.Component {
//   state = { requested: '' };
//   render() {
//     return (
//       <div>
//         <Button variant="link" onClick={() => this.setState({
//           requested: 'https://jsonplaceholder.typicode.com/posts'
//         })}>
//           Posts
//         </Button>
//         <Button variant="link" onClick={() => this.setState({
//           requested: 'https://jsonplaceholder.typicode.com/todos'
//         })}>
//           Todos
//         </Button>
//         <br />
//         Requested: {this.state.requested}
//       </div>
//     )
//   }
// }
// export default App;



/***********FUNCTION-BASED COMPONENTS****** */
//library for hooks (useState)
//useEffect is used to get data (equivalent of componentDidMount)
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import useFetch from './useFetch'

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts"
  const todosUrl = "https://jsonplaceholder.typicode.com/todos"
  //same as state = { requested: postsUrl }
  //returns two elements instead of one
  const [requested, setRequested] = useState(postsUrl)
  //initialises data into an empty array
  const data = useFetch(requested)
  return (
    <div>
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}
export default App;