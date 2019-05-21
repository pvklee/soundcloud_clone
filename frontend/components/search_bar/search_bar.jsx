import React from 'react'
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      focus: false,
      mouseOnSuggestion: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickSuggestion = this.handleClickSuggestion.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleInput(e){
    const input = e.target.value;
    this.setState({input: input});
    this.props.fetchSearchSuggestions(input);
  }

  handleSubmit(e){
    e.preventDefault();
    const query = this.state.input;
    if (!query) return;
    this.setState({focus: false});
    const search = {query: query, user_id: this.props.currentUserId};
    this.props.createSearchByCurrentUser(search)
      .then(() => this.props.history.push(`/search/?q=${query}`));
  }

  handleClickSuggestion(e){
    e.preventDefault();
    const suggestion = {type: e.target.getAttribute('data-type'), id: parseInt(e.target.getAttribute('data-id'))};
    this.setState({input: e.target.innerText, focus: false});
    const query = e.target.innerText;
    const search = {query: query, suggestion_type: suggestion.type, suggestion_id: suggestion.id, user_id: this.props.currentUserId};
    this.props.createSearchByCurrentUser(search)
      .then(() => this.props.history.push(`/search/?q=${query}`));
  }

  handleFocus(){
    this.setState({focus: true});
  }

  handleBlur(){
    if(!this.state.mouseOnSuggestion) this.setState({focus: false});
  }

  handleMouseEnter(){
    this.setState({mouseOnSuggestion: true})
  }

  handleMouseLeave(){
    this.setState({mouseOnSuggestion: false})
  }

  render(){
    const {songs, users} = this.props;
    let searchBarList;
    if(this.state.focus && this.state.input){
      searchBarList = [
        <button
            type="button"
            className="search-bar-list-item search-bar-list-item-main"
            key={`search-suggestion`}
            onClick={this.handleSubmit}>
          {`Search for "${this.state.input}"`}
        </button>
      ];
      if (this.props.searchSuggestionIds) {
        this.props.searchSuggestionIds.forEach(suggestion => {
          const {type, id} = suggestion;
          const suggestionText = (type == 'user') ? users[id].username : songs[id].title;
          searchBarList.push(
            <button
                type="button"
                className="search-bar-list-item"
                data-type={suggestion.type}
                data-id={suggestion.id}
                key={`search-suggestion`+suggestion.type+suggestion.id}
                onClick={this.handleClickSuggestion}>
              {suggestionText}
            </button>
          )
        })
      }
    }


    return(
      <div className="search-bar">
        
        <form className="search-bar-input-form">
          <input
            className="search-bar-input"
            type="text"
            value={this.state.input}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleInput}
          />
          <button type="submit" className="search-bar-submit" onClick={this.handleSubmit}>Submit</button>
          <div className="search-bar-list" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
            {searchBarList}
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar)