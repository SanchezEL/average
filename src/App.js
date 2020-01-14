import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Home from './containers/Home'
import CreateArticle from './containers/CreateArticle'
import Article from './containers/Article'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateArticle} />
          <Route path="/article/:title" component={Article}></Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
