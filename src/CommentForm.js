import React, { Component } from 'react'
import './CommentForm.css'

class CommentForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			input: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.submitComment = this.submitComment.bind(this)
		}

	handleChange(e)
	{
		console.log(e.target.value)
		this.setState({
			input: e.target.value

		})
	}

	submitComment() {
		this.props.addComment(this.state.input)
		this.refs.input.value = ''
	}
	render() {
		return (
			<div className="CommentForm">
				<textarea
					ref="input"
					rows="5"
					onChange={this.handleChange}
					placeholder="Write a comment..."
				/>
				<button onClick={this.submitComment}>Submit</button>
			</div>
		)
	}
}

export default CommentForm