import React, { Component } from 'react';

export default class Humans extends Component {
  // componentDidMount() {
  //   const humans = this.props.humans;
  // }
  render() {
    let list = this.props.list.map(human => {
      return (<li key={human}>{human}</li>)
    });

    return (
      <div>
        <h2>Queue of people trying to adopt:</h2>
        <ol className='human-list'>
          {list}
        </ol>
      </div>
    );
  }
}