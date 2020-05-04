import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <App />
      </Router>
    </AlertProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
