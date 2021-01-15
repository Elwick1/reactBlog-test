import React from 'react';
import PostContainer from './PostContainer';
import NewPostForm from './NewPostForm';

const posts = 'http://localhost:3000/posts'

export default class Posts extends React.Component {

  state = {
    posts : [],
    showPostForm : false
  }

  componentDidMount() {
    fetch(posts)
    .then(res => res.json())
    .then(posts => this.setState({
      posts : posts
    }))
  }

  addNewPost = (post) => {
    console.log(post)
    const configObject = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body : JSON.stringify(post)
    }
    fetch(posts, configObject)
    .then(res => res.json())
    .then(post => this.setState({
      posts : [...this.state.posts, post]
    }))
  }

  handleClicks = () => {
    this.setState({
      showForm : !this.state.showForm
    })
    console.log(this.state.showForm)
  }

    render() {
    return (
      <div className="Post-View">
        <PostContainer posts={this.state.posts}/>
        <div className="sidebar">
          <button onClick={() => this.handleClicks()}>Show/hide new post form</button>
          {this.state.showForm === true ? <NewPostForm addNewPost={this.addNewPost}/> : false}
        </div> 
      </div>
    );
  }
  }