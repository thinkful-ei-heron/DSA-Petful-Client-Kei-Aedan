import React, { Component } from 'react';
import Cats from './Cats.js';
import Dogs from './Dogs.js';
import Humans from './Humans.js';

export default class Pets extends Component {
  state = {
    cat: '',
    dog: '',
    humans: '',
    done: false
  }

  componentDidMount(){
    //fetch calls here
  }

  render(){
    return (
      <>
        <Cats></Cats>
        <Dogs></Dogs>
        <Humans></Humans>
      </>
    );
  }
}