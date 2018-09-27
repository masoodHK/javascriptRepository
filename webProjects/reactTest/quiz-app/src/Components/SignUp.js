import React, { Component } from "react";

export default class SignUp extends Component {
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
                            <legend>Sign Up</legend>
    
                            <label htmlFor="email-signup">Email</label>
                            <input
                                id="email-signup"
                                type="email"
                                placeholder="Email"
                                value={username}
                                onChange={handleUsername}/>
    
                            <label htmlFor="password-signup">Password</label>
                            <input
                                id="password-signup"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                            />
    
                            <button
                                type="submit"
                                className="pure-button pure-button-primary"
                            >
                                Sign Up
                            </button>
                        </fieldset>
                    </form>
                </div>
            );
        }
    }
}
