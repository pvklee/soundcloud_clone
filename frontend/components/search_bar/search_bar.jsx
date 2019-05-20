import React from 'react'
import {Link} from 'react-router-dom'

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    const input = e.target.value;
    this.setState({input: input});
    // this.props.fetchUserSearchIds(input);
    this.props.fetchSongSearchIds(input);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    const {songs} = this.props;
    const searchBarList = this.props.songSearchIds ? this.props.songSearchIds.map(id => (
      <div className="search-bar-list-item" key={`songsearch`+id}><Link to={`/songs/${id}`}>{songs[id].title}</Link></div>
    )) : null

    return(
      <div className="search-bar">
        <form>
          <input
            className="search-bar-input"
            type="text"
            value={this.state.input}
            onChange={this.handleInput}
          />

        </form>
        <div className="search-bar-list">
          {searchBarList}
        </div>
      </div>
    )
  }
}