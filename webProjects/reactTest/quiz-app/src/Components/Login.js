import React, { Component } from "react";

export default class Login extends Component {
    render() {
        const {
            username,
            password,
            handleUsername,
            handlePassword
        } = this.props
        if(this.props.loggedIn === true){
            return null
        }
        else {
            return (
                <div className="form col-6">
                    <form className="pure-form pure-form-stacked" onSubmit={this.props.function}>
                        <fieldset>
                            <legend>Log In</legend>
    
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={username}
                                onChange={handleUsername}/>
    
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                            />
    
                            <button
                                type="submit"
                                className="pure-button pure-button-primary"
                            >
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </div>
            );
        }
    }
}
