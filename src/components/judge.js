import React from 'react';
export default class Judge extends React.Component {
    constructor() {
     super()
   
     this.state = {stars: 0, available: false}
    }
   
    applaud() {
      //Send this applaud status to Kid.js
      this.props.getUplaud(true);
    }
   
    provideStars() {
      const {stars} = this.state;
   
      this.setState({stars: stars + 1})
    }
   
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
            <h1>Judge Component</h1>
          <button type="button" onClick={this.applaud.bind(this)}>
           Appreciate performance
          </button>
          <button type="button" onClick={this.provideStars.bind(this)}>
           Provide stars
          </button>
   
          Kid is available: {available}
   
          Stars gained: {stars}
        </div>
      );
    }
   }
   