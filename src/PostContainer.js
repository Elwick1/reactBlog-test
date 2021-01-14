import React from 'react';
import PostCard from './PostCard';

export default class PostsContainer extends React.Component{
    render(){
        return(
            <div className="postsGrid">
                <div className="row">
                    <h1> A collection of all posts</h1>
                    {this.props.posts.map(post => <PostCard {...post}/>)}
                </div>
            </div>
        )
    }
}