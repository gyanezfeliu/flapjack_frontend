import React, { Component } from 'react';
import BaseRouter from './routes';
import Alerts from './components/Layout/Alerts';
import Header from './components/Header/Header';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';
import './App.scss';

// function App() {

// JUST FOR COMPONENT DID MOUNT
export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="App">
          <Alerts />
          <Header />
          <BaseRouter />
      </div>
    );
  }
}

export default App;
