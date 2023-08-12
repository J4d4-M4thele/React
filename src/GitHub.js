import React, { Component } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';
import { Media, Form, Button } from 'react-bootstrap';

class GitHub extends Component {
    constructor() {
        super();
        //allows loading icon to appear when data 
        //is loading
        this.state = {
            //initialize empty data array
            data: [],
            searchTerm: '',
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //calls the server if needed
    componentDidMount() {
        //this.getGitHubData('greg');
    }
    //returns github data from API endpoint
    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                //not loading so info will display
                //in  browser console
                this.setState({
                    //false once all data is displayed
                    isLoading: false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }
    render() {
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );
        return (
            <div>
                <div>
                    <Form inline onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formInlineName">
                            <Form.Control
                                type="text"
                                value={this.state.searchTerm}
                                placeholder="Enter Search Term"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        {' '}
                        <Button type="submit">
                            Search
                        </Button>
                    </Form>
                    <h3>GitHub Users Results</h3>
                    {this.state.isLoading &&
                        <ReactLoading type="spinningBubbles" color="#444" />
                    }
                </div>
            </div>
        );
    }
    //event handlers
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }
}
export default GitHub;