import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Adopt from './Adopt.js';
import Info from './Info';
import './App.css';
import petfulApi from './Util/petful-api.js';

class App extends Component {
  state={
    name:null
  }

  setName = (name, history) => {
    petfulApi.enqueueHuman(name)
      .then( () => {
        return this.setState({name:name}, () => history.push('/adopt'));
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
            <Route exact path={'/adopt'} render={props => (<Adopt {...props} name={this.state.name}/>)}/>
            <Route exact path={'/'} render={props => (<Info setName={this.setName} {...props}/>)}/>
          </Switch>
        </main>
      </div>
    )
  };
}

export default App;
