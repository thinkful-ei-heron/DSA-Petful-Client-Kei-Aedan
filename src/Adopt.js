import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';
import Humans from './Humans';
import petfulApi from './Util/petful-api';

class Adopt extends Component {
  state = {
    humans: ''
  }

  componentDidMount() {
    Promise.all([petfulApi.getHumans(), ])
      .then(res => {
        this.setState({humans: res[0]});
      })
  }
  
  
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