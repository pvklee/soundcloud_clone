import {connect} from 'react-redux'
import SearchIndex from './search_index'
import {fetchSearchResults} from '../../actions/search_actions'

const mapStateToProps = (state, {location}) => ({
  query: new URLSearchParams(location.search).get('q'),
  songs: state.entities.songs,
  users: state.entities.users,
  searchResultIds: state.ui.filters.searchResultIds
})

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: query => dispatch(fetchSearchResults(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex)