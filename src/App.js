import React, { Component } from 'react';
import Kid from './components/kid';
import Teacher from './components/teacher';
import Judge from './components/judge';

class App extends Component {
  constructor(){
    super()
    
    this.state={
      volume:0,

    }
    this.getDanceStepsFromTeacher = this.getDanceStepsFromTeacher.bind(this);
    this.getUplaud = this.getUplaud.bind(this);
  }
  static getDerivedStateFromProps(){
    return {volume : 5}
  }

  getDanceStepsFromTeacher(steps){
    this.setState({
      steps
    })
  }
  getUplaud(uplaud){
    console.log("Uplaud Status====", uplaud);
    this.setState({
      uplaud
    })
  }
  

  render() {
    const {volume, steps, uplaud} = this.state;
    return (
      <div>
        <h1>Volueme : {volume}</h1>
        <Kid dressColor="#000" furtherSteps = {steps} uplaud={uplaud}/>
        <Teacher getSteps={this.getDanceStepsFromTeacher} />
        <Judge getUplaud={this.getUplaud} />
      </div>
    );
  }
}

export default App;

//1. parent me function
//2. parent ka function child me
//3. child se call