import {connect} from 'react-redux'
import SearchIndex from './search_index'
import {fetchSearchResults} from '../../actions/search_actions'
import {startLoading, stopLoading} from '../../actions/loading_actions'

const mapStateToProps = (state, {location}) => ({
  query: new URLSearchParams(location.search).get('q'),
  songs: state.entities.songs,
  users: state.entities.users,
  searchResultIds: state.ui.filters.searchResultIds,
  loading: state.ui.loading.loading
})

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: query => dispatch(fetchSearchResults(query)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex)