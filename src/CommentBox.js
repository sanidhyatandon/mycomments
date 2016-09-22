import React, { Component } from 'react';

import './CommentBox.css';
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends Component {
  render() {
    return (
      <div className="CommentBox">
          This is CommentBox
          <CommentList/>
          <CommentForm/>
      </div>
    )
  }
}

export default CommentBox
