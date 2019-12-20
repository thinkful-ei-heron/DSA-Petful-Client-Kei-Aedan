import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Adopt from './Adopt';
import Info from './Info';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Welcome to Petful!
        </header>
        <main className='App-main'>
          <Switch>
            <Route exact path={'/adopt'} render={props => (<Adopt {...props}/>)}/>
            <Route exact path={'/'} render={props => (<Info {...props}/>)}/>
          </Switch>
        </main>
      </div>
    )
  };
}

export default App;
