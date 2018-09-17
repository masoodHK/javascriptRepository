import React, { Component } from 'react'
import './QuizPage.css'

export default class QuizPage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      time: localStorage.getItem("timeRemaining") !== null? localStorage.getItem("timeRemaining"):(this.props.time / 1000) % 60,
      userAnswers: {}
    }

    this.handleOption = this.handleOption.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleOption(event, question) {
    let {userAnswers} = this.state
    userAnswers[question] = event.target.value
    console.log(userAnswers)
    this.setState({userAnswers})
  }

  componentDidRe() {
    this.timer = setInterval(this.tick(), 60000)
    if(this.state.time <= 0) {
      clearInterval(this.timer)
      localStorage.removeItem("timeRemaining")
      this.submit()
    }
  }

  tick = () => {
    localStorage.setItem("timeRemaining", this.state.time - 1)
    this.setState({ time: localStorage.getItem("timeRemaining") })
  }

  submit () {
    const { info } = this.props
    const { userAnswers } = this.state
    let res = JSON.parse(localStorage.getItem("result")) !== null ? JSON.parse(localStorage.getItem("result")) : [];

    let result = {
      rightAnswers: 0,
      quizTaken: info.title,
      totalQuestions: info.questions.length,
      userTookQuiz: true,
      date: new Date().toDateString()
    }

    info.questions.map(function(question) {
      console.log(userAnswers)
      if(question.answer === userAnswers[question.question]){
        result.rightAnswers += 1
      }
      return null
    })
    res.push(result)
    
    localStorage.setItem("result", JSON.stringify(res))
    this.props.submit();
  }

  render() {
    const { info } = this.props
    return (
      <div>
        <h1>{info.title}</h1>
        <p>Time Remaining: {this.state.time}</p>
        
          {info.questions.map((i, index) => {
            return <div key={index} className="question">
              <h3>{i.question}</h3>
              {i.options.map((option, index) => {
                return <label key={index} className="pure-checkbox">
                <input type="checkbox" onChange={(event) => this.handleOption(event, i.question)} value={option} />
                    {option}
                </label>
              })}
            </div>
          })}


          <button onClick={this.submit} className="pure-button">Submit</button>
      </div>
    )
  }
}
