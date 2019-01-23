import React from 'react';


export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
 }

static getDerivedStateFromProps(props, state){
    
    const newState = {};

    if(!state.helped){
        newState.danceSteps = [...state.danceSteps, ...props.furtherSteps];
        newState.helped = !!props.furtherSteps.length
    }
    if(props.uplaud){
        newState.emotion = 'Happy :)';
    }
    return newState;
    // if(state.helped && props.uplaud){
        
    //     return{emotion:'Happy :)'}
    // }
    // // if(props.uplaud){

    // // }
    // return{
    //     danceSteps : [...state.danceSteps, ...props.furtherSteps],
    //     helped : props.furtherSteps.length ? true : false,
        
    // };
    //props.stepsNew;
    //state.danceSteps;

    //console.log(a);
    //console.log(b);
    //var c = [...a, ...b];
    //console.log([...a, ...b]);
    
}

 qualified() {
   this.setState({startedPerforming: false})
 }

 componentDidMount(){
    this.setState({
        danceSteps : ['step1', 'step2'],
        startedPerforming:true
    })
 }

 render() {
   const {dressColor} = this.props;
   const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;

   return (
   <div>
       <h1>Kid - Component</h1>
     <div>dressColor: { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
    <div>Emotion: { emotion }</div>
    {startedPerforming &&
    <div>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
      <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
    </div>}
</div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };