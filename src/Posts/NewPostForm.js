import React from 'react';

export default class NewPostForm extends React.Component {

    state = {
        title : "",
        body : ""
    }

    handleTitleChange = (e) => {
        console.log(e.target.value)
        this.setState({
          title : e.target.value
        })
      };

      handleBodyChange = (e) => {
          console.log(e.target.value)
          this.setState({
              body : e.target.value
          })
      };

      handleSubmit = (e) => {
        e.preventDefault()
        console.log("Post Submitted")
        this.props.addNewPost(this.state)
      };

      render() {
    
        return (
          <form className="new-post-form" onSubmit={this.handleSubmit}>
            <input placeholder="Title" onChange={this.handleTitleChange}/>
            <textarea placeholder="Write Your Post Here" onChange={this.handleBodyChange}/>
            <input type="submit" value="Share your masterpiece" />
          </form>
        );
      }
}