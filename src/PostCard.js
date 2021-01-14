import React from 'react';

class PostCard extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h5>{this.props.body}</h5>
            </div>
        )
    }
}
export default PostCard;