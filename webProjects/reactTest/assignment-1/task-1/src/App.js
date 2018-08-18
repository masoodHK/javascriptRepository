import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"}
    const data = ['We', 'are', 'United'];
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}];
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{name}</h1>
        </header>
        <p className="App-intro">
          Object: {obj.name}
        </p>
        <ul>
          {data.map(el => {
            return <li key={el}>{el}</li>
          })}
        </ul>
        <ul>
          {list.map(objects => {
            return <li key={objects.name}>{objects.name}</li>
          })}
        </ul>
        {complex.map(data => {
          return <div className="job-desc">
            <h1>{data.company}</h1>
            <p>Jobs</p>
            <ul>
              {data.jobs.map(job => {
                return <li key={job}>{job}</li>
              })}
            </ul>
          </div>
        })}
      </div>
    );
  }
}

export default App;
