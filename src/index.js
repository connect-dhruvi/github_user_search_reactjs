import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Restaurant from './Restaurant';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import { BrowserRouter as Router } from 'react-router-dom';

//~import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Router> <App5 />  </Router>
  , document.getElementById('root')
);

// ReactDOM.render(
// <React.Fragment>
//   <App authorize={true}/>
// <Restaurant/></React.Fragment>,

//   document.getElementById('root')
// );

