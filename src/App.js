import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Adopt from './Adopt.js';
import Info from './info';
import './App.css';
import petfulApi from './util/petful-api.js';
const uuid = require('uuid/v4');

class App extends Component {
  state={
    name: null,
    id: null
  }

  setName = (name, history) => {
    const id = uuid();
    petfulApi.enqueueHuman(name, id)
      .then( () => {
        return this.setState({name: name, id: id}, () => history.push('/adopt'));
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Petful!</h1>
        </header>
        <main className='App-main'>
          <Switch>
            <Route exact path={'/adopt'} render={props => (<Adopt userId={this.state.id} {...props}/>)}/>
            <Route exact path={'/'} render={props => (<Info setName={this.setName} {...props}/>)}/>
          </Switch>
        </main>
      </div>
    )
  };
}

export default App;
