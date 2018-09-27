import React from 'react';


export default class Kid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
    }

    qualified() {
        this.setState({ startedPerforming: false })
    }

    componentWillMount() {
        this.setState({ volume: 5 })
    }

    componentDidMount() {
        this.setState({ danceSteps: ['step1', 'step2'], startedPerforming: true})
    }

    componentWillReceiveProps(props) {
        const { furtherSteps, applaud } = props;
        const { danceSteps } = this.state;
        console.log([...danceSteps, ...furtherSteps])
        if(applaud === true) {
            this.setState({
                danceSteps: [...danceSteps, ...furtherSteps],
                emotion: "happy"
            })
        }
        else {
            this.setState({
                danceSteps: [...danceSteps, ...furtherSteps]
            })
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(this.props.perform !== prevProps.perform && prevState.startedPerforming)
        if(this.props.perform !== prevProps.perform && prevState.startedPerforming) {
            this.qualified()
        }
    }
    
    componentWillUnmount = () => {
        console.log("Kid Leaves")
        this.props.leave()
    }
    

    render() {
        const {dressColor} = this.props;
        const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;
        return (
            <div>
                <div>dressColor: { dressColor }</div>
                <div style={{backgroundColor: dressColor, width: "100%", height: 50}}></div>
                <div>Emotion: { emotion }</div>
                {startedPerforming && <div>
                    Current Step: {danceSteps[currentStepIndex]}
                <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
                </div>}
            </div>
        );
    }
}

Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
