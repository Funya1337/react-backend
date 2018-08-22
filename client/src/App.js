import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = { 
		users: [],
		inputText: '' 
	}

	testFunc = () => {
		fetch(`/api/users?name=${this.state.inputText}`)
		.then(res => res.json())
		.then(users => this.setState({ users }));
	}
	handleChange =(e) => {
		console.log(e.target.value);
		this.setState({inputText: e.target.value})
	}

	componentDidMount() {
	}
  render() {
		console.log(111, this.state);
    return (
      <div className="App">
			<h1>Users</h1>
				{this.state.users.map(user =>
				<div key={user._id}>
					<div className='first-el'>{user.name}</div>
					<div>{user.lastname}</div>
				</div>
				)}
				<input onChange={this.handleChange}></input>
				<button onClick={this.testFunc}>Button</button>
      </div>
    );
  }
}

export default App;