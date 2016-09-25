import React, { Component } from 'react';

import './CommentBox.css';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import {comments} from './data'

class CommentBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comments:comments
		}
		this.addComment = this.addComment.bind(this)
	}
	addComment(comment) {
		const updatedComments = this.state.comments.concat(comment)
		this.setState({
			comments: updatedComments
		})
	}

	
	render() {
		return (
			<div className="CommentBox" >
			<CommentList comments={this.state.comments}/>
			<CommentForm addComment={this.addComment} />
			</div>
		)
	}
}
export default CommentBox;