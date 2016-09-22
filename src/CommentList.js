import React, { Component } from 'react';

import './CommentList.css';
import Comment from './Comment'

const comments = [
	'Arpit',
	'Shubham',
	'Rahul'
]	

class CommentList extends Component {
  render() {
  const renderedComments = comments.map((comment, i) => <Comment key={i} comment={comment} />)
		return (
      		<div className="CommentList">
      		{renderedComments}
          
      </div>
    )
  }
}

export default CommentList
