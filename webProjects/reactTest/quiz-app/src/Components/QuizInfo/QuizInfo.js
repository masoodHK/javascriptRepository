import React, { Component } from "react";
import "./QuizInfo.css";

export default class QuizInfo extends Component {
    render() {
        const { info, loggedIn } = this.props;
        if (loggedIn === true) {
            let res = JSON.parse(localStorage.getItem("result"))
            if(res !== null && res[this.props.index].quizTaken === info.title) {
                return (<div className="quiz">
                    <h3>{res.title}</h3>
                    <p>{res.date}</p>
                    <p>Result: {res.rightAnswers} / {res.totalAnswers}</p>
                </div>)
            }
            else {
                return (
                    <div>
                        {info.map((q, index) => {
                            return (
                                <div key={index} className="quiz">
                                    <h3>{q.title}</h3>
                                    <p>Questions: {q.quiz}</p>
                                    <p>Time: {(q.timer/1000) % 60} minutes</p>
                                    <button className="pure-button" onClick={this.props.back}>
                                        Go Back
                                    </button>
                                    <button className="pure-button pure-button-primary" onClick={this.props.start}>
                                        Start the Quiz
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                );
            }
		}
		else {
			return null
		}
    }
}
