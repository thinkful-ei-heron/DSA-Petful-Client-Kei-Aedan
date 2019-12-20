import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Adopt from './Adopt.js';
import './App.css';

class App extends Component {
  state = {
    cat: '',
    dog: '',
    humans: '',
    done: false
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Welcome to Petful!
        </header>
        <main className='App-main'>
          <Switch>
            <Route exact path={'/adopt'} render={props => (<Adopt {...props} cat={this.state.cat}/>)}/>
          </Switch>
        </main>
      </div>
    )
  };
}

export default App;
