import React from 'react';
import PostContainer from './PostContainer';
import NewPostForm from './NewPostForm';

const posts = 'http://localhost:3000/posts'

export default class Posts extends React.Component {

  state = {
    posts : []
  }

  componentDidMount() {
    fetch(posts)
    .then(res => res.json())
    .then(posts => this.setState({
      posts : posts
    }))
  }

  // addNewPost = (post) => {
  //   console.log(post)
  //   const configObject = {
  //     method : 'POST',
  //     headers : {
  //       'Content-Type' : 'application.json',
  //       'Accept' : 'application.json'
  //     },
  //     body : JSON.stringify(post)
  //   }
  //   fetch(posts, configObject)
  //   .then(res => res.json())
  //   .then(post => this.setState({
  //     posts : [...this.state.posts, post]
  //   }))
  // }



    render() {
    return (
      <div className="Post-View">
        <PostContainer posts={this.state.posts}/>
        {/* <div className="sidebar">
          <button onClick={() => this.handleClick()}>Show/hide new post form</button>
          {this.state.showForm === true ? <NewPostForm addNewPost={this.addNewPost}/> : false}
        </div>  */}
      </div>
    );
  }
  }