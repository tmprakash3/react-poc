import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import Public from './components/public';
import Account from './components/accounts/account';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Orders from './components/orders/orders';
import OrderDetailPage from './components/orders/detail';
import Services from './components/services/services';
import ProtectRouter from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

import '../style/style.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
console.log("store");
console.log(store);
const token = localStorage.getItem('auth_jwt_token');

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({type: AUTH_USER})
}
ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType="noslash">
      <App>
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route path="/dashboard" component= {Dashboard} />
          <Route path="/home" component= {Public} />
          <ProtectRouter path="/account" component= {Account} />
          <Route path="/signin" component= {Signin} />
          <Route path="/signup" component= {Signup} />
          <Route path="/signout" component= {Signout} />
          <Route exact path="/orders" component= {Orders} />
          <Route exact path="/orders/details/:id" component={OrderDetailPage}/>
          <Route path="/services" component={Services} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
