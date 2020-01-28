import React, { Component } from 'react';
import config from './config';

class Cat extends Component {
  handleClick = event => {
    event.preventDefault();
    fetch(`${config.REACT_APP_URL}/cats`, {
      method: 'DELETE'
    })
      .then(res => {
        fetch(`${config.REACT_APP_URL}/cats`, {
          method: 'GET'
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(e => Promise.reject(e));
            }
            return res.json();
          })
          .then(cat => {
            console.log('inside cat adopt button', cat);
            return this.props.setCat(cat);
          })
      })
  }

  renderDetails() {
    return (
      <div className='pet-container'>
        <div className='Pet-details'>
          <img className='Pet-photo' src={this.props.cat.imageURL} alt='A cute cat next in line to be adopted.'></img>
          <p className='Detail-text'>Name: {this.props.cat.name}</p>
          <p className='Detail-text'>Gender: {this.props.cat.sex}</p>
          <p className='Detail-text'>Age: {this.props.cat.age} years old</p>
          <p className='Detail-text'>Breed: {this.props.cat.breed}</p>
          <p className='Detail-text'>Story: {this.props.cat.story}</p>
        </div>
        <button className='Adopt-button' type='button' onClick={this.handleClick} disabled={!this.props.name}>Adopt</button>
      </div>
    )
  }

  renderNull() {
    return <h3>No more cats to be adopted!</h3>
  }

  render() {
    return (
      <div className='Pet'>
        <h3>Cat</h3>
        {this.props.cat.length === 0 ? this.renderNull() : this.renderDetails()}
      </div>
    );
  }
}

export default Cat;