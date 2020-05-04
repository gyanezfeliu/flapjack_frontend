import React from 'react';
import BaseRouter from './routes';
import Alerts from './components/Layout/Alerts';
import './App.scss';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

function App() {

  return (
    <div className="App">
        <Alerts />
        <BaseRouter />
    </div>
  );
}

export default App;
