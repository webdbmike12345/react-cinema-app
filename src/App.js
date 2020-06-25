import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import store from './redux/store';
import './App.scss';
import Main from './components/main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      <div className="app">
        <Main></Main>
      </div>
    </Provider>
  );
};

export default App;
