import React from 'react';
import BaseRouter from './routes';
import Alerts from './components/Layout/Alerts';
import './App.scss';

function App() {

  return (
    <div className="App">
        <Alerts />
        <BaseRouter />
    </div>
  );
}

export default App;
