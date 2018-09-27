import React, { Component } from 'react';
import logo from './logo.svg';
import Kid from './Kid';
import Judge from './Judge'
import Teacher from './Teacher'
import './App.css';

class App extends Component {
	state = {
		furtherSteps: [],
		applause: false,
		perform: true,
		childLeave: false,
		judgeLeave: false
	}

	helpStudent = (steps) => {
		console.log(steps)
		this.setState({ furtherSteps: steps })
	}

	appreciateStudent = () => {
		this.setState({ applause: true })
	}

	stopPerforming = () => {
		this.setState({ perform: false })
	}

	removeKid = () => {
		this.setState({ childLeave: true })
	}

	removeJudge = () => {
		this.setState({ judgeLeave: true })
	}

	render() {
		const { furtherSteps, applause, perform, childLeave, judgeLeave } = this.state
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				{!childLeave && <Kid dressColor='green' furtherSteps={furtherSteps} applaud={applause} perform={perform} leave={this.removeJudge}/>}
				<Teacher helpStudent={(steps) => this.helpStudent(steps)}/>
				{!judgeLeave && <Judge appreciate={this.appreciateStudent} perform={this.stopPerforming}/>}
				<button onClick={this.removeKid}>Ask the Kid to Leave the Show</button>
			</div>
		);
	}
}

export default App;
