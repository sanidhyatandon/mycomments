import React, { Component } from 'react';

import './CommentList.css';
import Comment from './Comment'


class CommentList extends Component {
  render() {
  const renderedComments = this.props.comments.map((comment, i) => <Comment key={i} comment={comment} />)
		return (
      		<div className="CommentList">
      		{renderedComments}
          
      </div>
    )
  }
}

export default CommentList
