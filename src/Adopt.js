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
    id: '',
    adoptedArray: []
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
          this.setState({
            humans: res,
            name: res[0].value.name,
            id: res[0].value.id
          });
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

  setAdopted = (adopted) => {
    const adoptedArray = this.state.adoptedArray;
    adoptedArray.push(adopted);
    this.setState({adoptedArray})
  }

  render(){
    let adopted = this.state.adoptedArray.map(pet => pet.name);
    return (
      <>
        <div className='all-pets'>
          <Cat userId={this.props.userId} queueId={this.state.id} cat={this.state.cat} setCat={this.setCat} setAdopted={this.setAdopted}></Cat>
          <Dog userId={this.props.userId} queueId={this.state.id} dog={this.state.dog} setDog={this.setDog} setAdopted={this.setAdopted}></Dog>
        </div>
        {adopted.length > 0 && <p>You have adopted {adopted.join(', ')}</p>}
        <Humans list={this.state.humans} />
      </>
    );
  }
}

export default Adopt;