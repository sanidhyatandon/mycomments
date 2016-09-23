import React, { Component } from 'react';

import './CommentBox.css';
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: "comments"
		}
	
	}
	handleComments()
	{
		
		this.setState({
			input: updatedComments

		})
	}

  render() {
  	addComment(comment) {
  		const updatedComments = this.comments.concat(comment)
  	}
    return (
      <div className="CommentBox">
          This is CommentBox
          <CommentList comments={[]}/>
          <CommentForm addComment(comments)/>
      </div>
    )
  }
}

export default CommentBox
