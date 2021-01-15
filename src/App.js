import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Posts from './Posts/Posts';



export default class App extends React.Component {

  state = {
    showPosts : false,
    
  };
  
  handleClick = () => {
    this.setState({
      showPosts : !this.state.showPosts
    })
  }

  

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="proof"> ITS WORKING </h1>
        <button className="showBtn" onClick={this.handleClick}> Show Posts </button>
        {this.state.showPosts === true ? (
        <div className="posts-container">
          <Posts/>
        </div>
        ) : null }
      </header>
    </div>
  );
}
}
