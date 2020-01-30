import React, { Component } from 'react';

export default class Humans extends Component {
  render() {
    const humans = this.props.list.map(node => node.value);
    let list = humans.map(human => human.name);  
    list = list.map((human, i) => {
      return (<li key={i}>{human}</li>)
    });
    return (
      <div>
        <h2>Queue of people trying to adopt:</h2>
        <ol className='human-list'>
          {this.props.list.length === 0 ? <p>No one is in the queue.</p> : list}
        </ol>
      </div>
    );
  }
}