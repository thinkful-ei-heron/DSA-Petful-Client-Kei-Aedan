import React, { Component } from 'react';
import config from './config';

class Dog extends Component {
  handleClick = event => {
    event.preventDefault();
    fetch(`${config.REACT_APP_URL}/dogs`, {
      method: 'DELETE'
    })
      .then(res => {
        fetch(`${config.REACT_APP_URL}/dogs`, {
          method: 'GET'
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(e => Promise.reject(e));
            }
            return res.json();
          })
          .then(dog => {
            return this.props.setDog(dog);
          })
      })
  }

  renderDetails() {
    return (
      <div className='pet-container'>
        <div className='Pet-details'>
          <img className='Pet-photo' src={this.props.dog.imageURL} alt='A cute dog next in line to be adopted.'></img>
          <p className='Detail-text'>Name: {this.props.dog.name}</p>
          <p className='Detail-text'>Gender: {this.props.dog.sex}</p>
          <p className='Detail-text'>Age: {this.props.dog.age} years old</p>
          <p className='Detail-text'>Breed: {this.props.dog.breed}</p>
          <p className='Detail-text'>Story: {this.props.dog.story}</p>
        </div>
        <button className='Adopt-button' type='button' onClick={this.handleClick} disabled={!this.props.name}>Adopt</button>
      </div>
    )
  }

  renderNull() {
    return <h3>No more dogs to be adopted!</h3>
  }

  render() {
    return (
      <div className='Pet'>
        <h3>Dog</h3>
        {this.props.dog.length === 0 ? this.renderNull() : this.renderDetails()}
      </div>
    );
  }
}

export default Dog;