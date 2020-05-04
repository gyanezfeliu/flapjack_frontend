import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Router>
        <h1>Studies</h1>
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
