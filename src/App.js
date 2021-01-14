import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Posts from './Posts';



export default class App extends React.Component {

  

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="proof"> ITS WORKING </h1>
        <div className="posts-container">
          <Posts/>
        </div>
      </header>
    </div>
  );
}
}
