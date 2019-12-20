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
  }
  componentDidMount() {
    Promise.all([petfulApi.getHumans(), petfulApi.getCat(), petfulApi.getDog()])
      .then(res => {
        console.log(res);
        this.setState({humans: res[0], cat: res[1], dog: res[2]});
      })
  }
  setCat = (cat) => {
    if (cat === null){
      cat = [];
    }
    this.setState({cat});
  }

  setDog = (dog) => {
    this.setState({dog});
  }

  render(){
    return (
      <>
        <Cat cat={this.state.cat} setCat={this.setCat}></Cat>
        <Dog dog={this.state.dog} setDog={this.setDog}></Dog>
        <Humans list={this.state.humans} />
      </>
    );
  }
}

export default Adopt;