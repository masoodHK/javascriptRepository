import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World",
    }
    this.changeText = this.changeText.bind(this);
  }
  changeText (){
    this.setState({
      text: this.state.text === "Hello World" ? "Hello Pakistan" : "Hello World",
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.changeText}>{this.state.text}</h1>
          <p>Click the text to toggle the statement in the text</p>
        </header>
      </div>
    );
  }
}
