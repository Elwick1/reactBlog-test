import React from 'react';
import PostContainer from './PostContainer';

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

    render() {
    return (
      <div className="Post-View">
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
  }