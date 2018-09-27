import React, { Component } from "react";
import "./QuizList.css";

export default class QuizList extends Component {
    render() {
        const { quiz, loggedIn } = this.props;
        if (loggedIn === true) {
            return (
                <div>
                    {quiz.map((q, index) => {
                        return (
                            <div key={index} className="quiz">
                                <h3>{q.title}</h3>
								<button className="pure-button pure-button-primary"
									onClick={() => this.props.show(index)}>
                                    Show Info
                                </button>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return null;
        }
    }
}
