/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes.js';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import {loadCourse} from './actions/courseActions.js'
import {loadAuthors} from './actions/authorActions.js'
import '../node_modules/toastr/build/toastr.min.css'


const store=configureStore();
store.dispatch(loadCourse());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
