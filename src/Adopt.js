import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';
import Humans from './Humans';
import petfulApi from './util/petful-api';

class Adopt extends Component {
  state = {
    humans: [],
    cat: '',
    dog: '',
    name: this.props.name,
  }
  componentDidMount() {
    petfulApi.getCat()
      .then(res => {
        if (res !== null){
          this.setState({cat: res})
        }
      })
        .then( () => {
          petfulApi.getDog()
            .then(res => {
              if (res !== null){
                this.setState({dog: res})
              }
            })
        })
    this.timer = setInterval( () => {
      petfulApi.getHumans()
        .then(res => {
          this.setState({humans: res});
        })
      },
      2500)  
  }

  componentWillUnmount() {
    clearInterval(this.timer) 
    this.timer = null; 
  }
  
  setCat = (cat) => {
    if (cat === null){
      cat = [];
    }
    this.setState({cat});
  }

  setDog = (dog) => {
    if (dog === null){
      dog = [];
    }
    this.setState({dog});
  }

  render(){
    return (
      <>
        <div className='all-pets'>
          <Cat name={this.state.name===this.state.humans[0]} cat={this.state.cat} setCat={this.setCat}></Cat>
          <Dog name={this.state.name===this.state.humans[0]}dog={this.state.dog} setDog={this.setDog}></Dog>
        </div>
        <Humans list={this.state.humans} />
      </>
    );
  }
}

export default Adopt;