import React, { Component } from 'react';
import swal from 'sweetalert';
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "admin@email.com",
            password: "admin",
            isLoggedIn: false,
            inputUsername: "",
            inputPassword: ""
        }


        this.authenticate = this.authenticate.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
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

    render() {
        if(this.isLoggedIn) {
            return
        }
        return (
            <form onSubmit={this.authenticate} className="form">
                <h2>Login</h2>
                <div className="input-field">
                    <input
                        type="email"
                        value={this.state.inputUsername}
                        onChange={this.handleUsernameChange} 
                        placeholder="Email: admin@email.com" />
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
        );

    }
}