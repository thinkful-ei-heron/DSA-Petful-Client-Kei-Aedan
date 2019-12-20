import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';
import Humans from './Humans';

class Adopt extends Component {
  
  render(){
    return (
      <>
        <Cat></Cat>
        <Humans list={this.state.humans} />
      </>
    );
  }
}

export default Adopt;