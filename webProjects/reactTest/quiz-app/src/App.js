import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, Button } from 'mdbreact';
import * as localforage from 'localforage'

import QuizInfo from "./Components/QuizInfo/QuizInfo";
import QuizList from "./Components/QuizList/QuizList";
import QuizPage from "./Components/QuizPage/QuizPage";
import Login from './Components/Login';
import Signup from './Components/SignUp'

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizList: [
                {
                    title: "Angular Quiz",
                    quiz: 25,
                    timer: 100000,
                    questions: [
                        {
                            question: "Angular is made by: ",
                            options: ["Google", "Facebook", "Microsoft"],
                            answer: "Google"
                        },
                    ]
                },
                {
                    title: "React Quiz",
                    quiz: 15,
                    timer: 235000,
                    questions: [
                        {
                            question: "React is made by: ",
                            options: ["Google", "Facebook", "Microsoft"],
                            answer: "Facebook"
                        },
                    ]
                },
                {
                    title: "NodeJS Quiz",
                    quiz: 25,
                    timer: 80000,
                    questions: [
                        {
                            question: "",
                            options: [],
                            answer: ""
                        },
                    ]
                },
                {
                    title: "Javascript Quiz",
                    quiz: 3,
                    timer: 30000,
                    questions: [
                        {
                            question: "Javascript is _________ language.",
                            options: [
                                "Programming",
                                "Application",
                                "Scripting"
                            ],
                            answer: "Scripting"
                        },
                        {
                            question: "JavaScript is ______ Side Scripting Language.",
                            options: [
                                "Server",
                                "Client",
                                "None of These"
                            ],
                            answer: "Client"
                        },
                        {
                            question: "JavaScript is an ________ language.",
                            options: [
                                "compiled",
                                "Interpreted",
                                "None of these"
                            ],
                            answer: "Interpreted"
                        },
                    ]
                },
            ],
            isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
            quizStarted: JSON.parse(localStorage.getItem("quizStarted")),
            username: "",
            password: "",
            quizInfo: [],
            quizIndex: 0,
            usernameSignUp: "",
            passwordSignUp: ""
        };

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUsernameSignup = this.handleUsernameSignup.bind(this)
        this.handlePasswordSignup = this.handlePasswordSignup.bind(this)
        this.signup = this.signup.bind(this)
        this.signout = this.signout.bind(this)
        this.login = this.login.bind(this)
        this.showInfo = this.showInfo.bind(this)
    }

    handleUsername (event) {
        this.setState({username: event.target.value})
    }

    handlePassword (event) {
        this.setState({password: event.target.value})
    }

    handleUsernameSignup (event) {
        this.setState({usernameSignUp: event.target.value})
    }

    handlePasswordSignup (event) {
        this.setState({passwordSignUp: event.target.value})
    }

    signout() {
        localStorage.setItem("isLoggedIn", false)
        this.setState({ isLoggedIn: false });
    }

    login(event) {
        event.preventDefault();
        localforage.getItem("User").then(res => {
            console.log(res)
            if(res.usernameSignUp === this.state.username && res.passwordSignUp === this.state.password) {
                this.setState({ isLoggedIn: true })
                localStorage.setItem("isLoggedIn", true)
            }
        })
    }

    signup(event) {
        event.preventDefault();
        const { usernameSignUp, passwordSignUp } = this.state
        console.log(usernameSignUp, passwordSignUp)
        localforage.setItem("User", { usernameSignUp,  passwordSignUp}).then(() => {
            this.setState({ isLoggedIn: true })
            localStorage.setItem("isLoggedIn", true)
        })
    }

    showInfo(id) {
        const { quizList } = this.state
        let info = quizList.filter((data, index) => index === id);
        this.setState({ quizInfo: info, quizIndex: id })
    }

    goBack = () => {
        localforage.setItem("quizInfo", [])
        this.setState({quizInfo: []})
    }

    quizSubmitted = () => {
        localStorage.setItem("quizStarted", false)
        this.setState({quizStarted: false})
        this.goBack()
    }

    startQuiz = () => {
        localStorage.setItem("quizStarted", true)
        this.setState({ quizStarted: true })
    }

    render() {
        const { quizList, isLoggedIn, quizStarted, quizInfo } = this.state
        return (
            <div>
                <Navbar>
                    <NavbarBrand>Quiz App</NavbarBrand>
                    <NavbarNav right>
                        {isLoggedIn && <NavItem><Button onClick={this.signout}>Sign Out</Button></NavItem>}
                    </NavbarNav>
                </Navbar>
                <div className="container mt-3">    
                    <div className="row">
                        <Login
                            username={this.state.username}
                            password={this.state.password}
                            handleUsername={this.handleUsername}
                            handlePassword={this.handlePassword}
                            function={this.login} loggedIn={isLoggedIn}/>
                        <Signup
                            username={this.state.usernameSignUp}
                            password={this.state.passwordSignUp}
                            handleUsername={this.handleUsernameSignup}
                            handlePassword={this.handlePasswordSignup}
                            function={this.signup} loggedIn={isLoggedIn}/>
                    </div>
                    {(quizInfo.length !== 0 && !quizStarted) && <QuizInfo
                                                loggedIn={isLoggedIn}
                                                info={quizInfo}
                                                index={this.state.quizIndex}
                                                back={this.goBack}
                                                start={this.startQuiz}/>}
                    {(quizInfo.length === 0 && !quizStarted) && <QuizList
                                                loggedIn={isLoggedIn}
                                                quiz={quizList}
                                                show={this.showInfo}/>}
                    {(quizInfo.length !== 0 && quizStarted) && <QuizPage
                                                info={quizInfo[0]}
                                                time={quizInfo[0].timer}
                                                submit={this.quizSubmitted}/>}
                </div>
            </div>
        );
    }
}

export default App;
