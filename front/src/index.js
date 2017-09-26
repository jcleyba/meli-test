import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import './styles/Main.css';
import rootReducer from './reducers/index';
import Router from './Router';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
