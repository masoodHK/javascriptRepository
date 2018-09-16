import React, { Component } from "react";
import "./QuizInfo.css";

export default class QuizInfo extends Component {
    render() {
        const { quiz, loggedIn } = this.props;
        if (loggedIn === true) {
            return (
                <div>
                    {quiz.map((q, index) => {
                        return (
                            <div key={index}>
                                <h3>{q.title}</h3>
                                <button className="pure-button pure-button-primary">
                                    Show Info
                                </button>
                            </div>
                        );
                    })}
                </div>
            );
		}
		else {
			return null
		}
    }
}
