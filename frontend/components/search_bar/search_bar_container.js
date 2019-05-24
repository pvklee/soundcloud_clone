import {connect} from 'react-redux'
import SearchBar from './search_bar'
import {fetchSearchSuggestions, createSearchByCurrentUser} from '../../actions/search_actions'


const mapStateToProps = state => ({
  searchSuggestionIds: state.ui.filters.searchSuggestionIds,
  songs: state.entities.songs,
  users: state.entities.users,
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  fetchSearchSuggestions: query => dispatch(fetchSearchSuggestions(query)),
  createSearchByCurrentUser: search => dispatch(createSearchByCurrentUser(search))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)