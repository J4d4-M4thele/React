import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Table } from 'react-bootstrap';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    //where server requests and state updates occur
    componentDidMount() {
        //accessing database
        firebase.database().ref('/')
            .on('value', snapshot => {
                let returnArr = [];
                snapshot.forEach(data => {
                    var user = data.val();
                    //assigns key value to allow us to get
                    //specific object to edit or delete 
                    user['key'] = data.key;
                    returnArr.push(user);
                });
                this.setState({
                    users: returnArr
                })
            });
    }
    render() {
        const listUsers = this.state.users.map((user) =>
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>Edit</td>
                <td>Remove</td>
            </tr>
        );
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default User;