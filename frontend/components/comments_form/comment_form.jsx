import React from 'react'

export default class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      user_id: this.props.currentUserId,
      song_id: this.props.songId,
      parent_comment_id: this.props.parentCommentId,
      song_time: null
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    if(!comment.parent_comment_id) {comment.song_time = this.props.state.ui.currentSongTime};
    this.props.createComment(comment)
      .then(()=>this.setState({body: ''}))
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value})
  }

  render(){
    return (
      <div>
        {/* <div>
          <ul>{errorMessages}</ul>
        </div> */}
        <form>
          <input 
            type='text'
            value={this.state.body}
            onChange={this.update('body')}
            placeholder='write your comment here' />
          <br/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}