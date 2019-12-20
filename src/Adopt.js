import React, { Component } from 'react';
// import Cats from './Cats.js';
// import Dogs from './Dogs.js';
import Humans from './Humans.js';
import petfulApi from './Util/petful-api';

export default class Pets extends Component {
  state = {
    cat: '',
    dog: '',
    humans: [],
    done: false
  }

  componentDidMount(){
    Promise.all([petfulApi.getHumans()])
      .then(valueArr => {
        this.setState({
          humans: valueArr[0]
        })
      })
  }

  deleteHuman() {
    let newHumans = this.humans.splice(0, 1);
    petfulApi.deleteHuman();
    this.setState({
      humans: newHumans
    });
  }

  render(){
    return (
      <>
        {/* <Cats></Cats>
        <Dogs></Dogs> */}
        <Humans list={this.state.humans} />
      </>
    );
  }
}