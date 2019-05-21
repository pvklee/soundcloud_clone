import * as APIUtil from '../util/search_api_util'

export const RECEIVE_SEARCH_SUGGESTIONS = "RECEIVE_SEARCH_SUGGESTIONS"
export const RECEIVE_SEARCH_BY_CURRENT_USER = "RECEIVE_SEARCH_BY_CURRENT_USER"
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"

const receiveSearchSuggestions = ({songs, searchSuggestionIds, users}) => ({
  type: RECEIVE_SEARCH_SUGGESTIONS,
  songs,
  searchSuggestionIds,
  users
})

const receiveSearchByCurrentUser = (search) => ({
  type: RECEIVE_SEARCH_BY_CURRENT_USER,
  search
})

const receiveSearchResults = ({songs, searchResultIds, users}) => ({
  type: RECEIVE_SEARCH_RESULTS,
  songs,
  users,
  searchResultIds
})

//async

export const fetchSearchSuggestions = query => dispatch => (
  APIUtil.fetchSearchSuggestions(query)
    .then(suggestions=>dispatch(receiveSearchSuggestions(suggestions)))
)

export const createSearchByCurrentUser = search => dispatch => (
  APIUtil.createSearchByCurrentUser(search)
    .then(search => dispatch(receiveSearchByCurrentUser(search)))
)

export const fetchSearchResults = query => dispatch => (
  APIUtil.fetchSearchResults(query)
    .then(results => dispatch(receiveSearchResults(results)))
)