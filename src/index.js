import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (sessionStorage.getItem('bookwormJWT')) {
  const user = { token: sessionStorage.getItem('bookwormJWT') };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
