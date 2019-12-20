import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';
import Humans from './Humans';
import petfulApi from './Util/petful-api';

class Adopt extends Component {
  state = {
    humans: [],
    cat: '',
    dog: '',
    name: this.props.name,
  }
  componentDidMount() {
    Promise.all([petfulApi.getHumans(), petfulApi.getCat(), petfulApi.getDog()])
      .then(res => {
        if (res[1] === null){
          res[1] = [];
        }
        if (res[2] === null){
          res[2] = [];
        }
        this.setState({humans: res[0], cat: res[1], dog: res[2]});
      })
  }

  timer = () => {
    setTimeout(() => {
      petfulApi.getHumans()
    .then(resp => {
      this.setState({
        humans: resp
      })
    })
    }, 5000);
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
    this.timer();
    return (
      <>
        <Cat name={this.state.name===this.state.humans[0]} cat={this.state.cat} setCat={this.setCat}></Cat>
        <Dog name={this.state.name===this.state.humans[0]}dog={this.state.dog} setDog={this.setDog}></Dog>
        <Humans list={this.state.humans} />
      </>
    );
  }
}

export default Adopt;