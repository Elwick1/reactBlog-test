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
      }

      handleBodyChange = (e) => {
        console.log(e.target.value)
        this.setState({
          body : e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        console.log("Post Submitted")
        this.props.addNewPost(this.state)
      }

      render() {
    
        return (
          <form className="new-poem-form" onSubmit={this.handleSubmit}>
            <input placeholder="Title" onChange={this.handleTitleChange}/>
            <input placeholder="Body" onChange={(e) => this.handleBodyChange(e.target.value)}/>
            {/* <textarea placeholder="Write your masterpiece here..." rows={10} onChange={(e) => this.handleContentChange(e.target.value)}/> */}
            <input type="submit" value="Share your masterpiece" />
          </form>
        );
      }
}