//this file should only render App!

import React from 'react';
import ReactDOM from 'react-dom';
//// const React = require('react')
// the 'const React' is exactly the same as the import above, it's an ES 6 thing

//Boostrap stuff added:
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import './index.css';
import App from './App';
////the 'const App' is exactly the same as the import above
//const App = require('./App')

import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
