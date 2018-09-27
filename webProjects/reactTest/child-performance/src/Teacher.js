import React from 'react';

export default class Teacher extends React.Component {

    sendDataToKid = () => {

        const furtherSteps = ['step3', 'step4', 'step5']
        this.props.helpStudent(furtherSteps)
    }  

    render() { 
        return (
            <button onClick={this.sendDataToKid}>Get Help From Teacher</button>
        );
    }
}
   