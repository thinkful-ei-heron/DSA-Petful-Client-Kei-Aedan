import React, { Component } from 'react';

export default class Humans extends Component {
  render() {
    let list = this.props.list.map(human => {
      return (<li key={human}>{human}</li>)
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