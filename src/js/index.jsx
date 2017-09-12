// vendor modules
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRedirect,
  hashHistory,
} from 'react-router';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
// react modules
import RootRoute from './RootRoute';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
// redux modules
import store from './store';
// css modules
import '../scss/main.scss';


const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={RootRoute}>
        <IndexRedirect to="chapter1" />
        <Route path="chapter1" component={Chapter1} />
        <Route path="chapter2" component={Chapter2} />
        <Route path="chapter3" component={Chapter3} />
        <Route path="chapter4" component={Chapter4} />
      </Route>
      <Route path="/chapter5" component={Chapter4}/>
    </Router>
  </Provider>
), document.getElementById('app'));
