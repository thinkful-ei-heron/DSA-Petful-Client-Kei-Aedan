import React, { Component } from 'react';

class Cat extends Component {
  state = {
    cat: {}
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/cats', {
      method: 'GET'
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();    
      })
      .then(cat => {
        return this.setState(cat);
      })
  }
  handleClick = event => {
    event.preventDefault();
    fetch('http://localhost:8080/api/cats', {
      method: 'DELETE'
    })
      .then(res => {
        fetch('http://localhost:8080/api/cats', {
          method: 'GET'
        })
          .then(res => {
            if(!res.ok) {
              return res.json().then(e => Promise.reject(e));
            }
            return res.json();    
          })
          .then(cat => {
            return this.setState({cat: cat});
          })
      })
  }
  render(){
    return (
      <div className='Pet'>
        <h3>Cat</h3>
        <div className='Pet-details'>
          <img className='Pet-photo' src={this.state.imageURL} alt='A cute cat next in line to be adopted.'></img>
          <p className='Detail-text'>Name: {this.state.name}</p>
          <p className='Detail-text'>Gender: {this.state.sex}</p>
          <p className='Detail-text'>Age: {this.state.age} years old</p>
          <p className='Detail-text'>Breed: {this.state.breed}</p>
          <p className='Detail-text'>Story: {this.state.story}</p>
        </div>
        <button className='Adopt-button' type='button' onClick={this.handleClick}>Adopt</button>
      </div>
    );
  }
}

export default Cat;