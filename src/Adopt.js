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
    this.timer = setInterval( () => {
      Promise.all([petfulApi.getHumans(), petfulApi.getCat(), petfulApi.getDog()])
        .then(res => {
          console.log(res[0]);
          if (res[1] === null){
            res[1] = [];
          }
          if (res[2] === null){
            res[2] = [];
          }
          this.setState({humans: res[0], cat: res[1], dog: res[2]});
        })
      },
      1000)
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