import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import store from './redux/store';
import './App.scss';
import Main from './components/main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './components/content/details/Details';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:id/:name/details" component={Details} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
