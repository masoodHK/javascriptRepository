import React, { Component } from 'react';
import swal from 'sweetalert';
import EmployeeTable from '../employeeTable/EmployeeTable';
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "admin@domain.com",
            password: "admin",
            isLoggedIn: false,
            inputUsername: "",
            inputPassword: ""
        }
        
        this.authenticate = this.authenticate.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.signOut = this.signOut.bind(this);
    }

    authenticate(event) {
        event.preventDefault();
        const { username, password, inputUsername, inputPassword } = this.state

        if(username === inputUsername && password === inputPassword) {
            swal({
                title: "Yay!",
                text: "You are logged in!",
                icon: "success",
            });
            this.setState({ isLoggedIn: true, inputUsername: "", inputPassword: "" })
        }
        else {
            swal({
                title: "Oops!",
                text: "The email or password inserted is incorrect or empty!",
                icon: "error",
            });
        }
    }

    handleUsernameChange(event) {
        this.setState({inputUsername: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({inputPassword: event.target.value})
    }

    signOut() {
        this.setState({isLoggedIn: false});
    }

    render() {
        if(this.state.isLoggedIn === true) {
            return (
                <div>
                    <header className="App-header">
                        <h1 className="App-title">Admin Panel</h1>
                        <button className="btn" onClick={this.signOut}>Sign Out</button>
                    </header>
                    <div className="container">
                        <EmployeeTable />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <header className="App-header">
                        <h1 className="App-title">Admin Panel</h1>
                    </header>
                    <div className="container">
                        <form onSubmit={this.authenticate} className="form">
                            <h2>Login</h2>
                            <div className="input-field">
                                <input
                                    type="email"
                                    value={this.state.inputUsername}
                                    onChange={this.handleUsernameChange} 
                                    placeholder="Email: admin@domain.com" />
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    value={this.state.inputPassword}
                                    onChange={this.handlePasswordChange} 
                                    placeholder="Password: admin"/>
                            </div>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
}