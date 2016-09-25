import React, { Component } from 'react';

import './CommentList.css';
import Comment from './Comment'


class CommentList extends Component {
	render() {
		const renderedComments = this.props.comments.map((c,i) => <Comment key={i} comment={c}/>)
		return (
			<div className="CommentList">
				{renderedComments}			
			</div>
		)
	}
}

export default CommentList
