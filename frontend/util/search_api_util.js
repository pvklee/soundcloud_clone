export const fetchSearchSuggestions = queryForSuggestions => (
  $.ajax({
    url: `api/searches`,
    method: 'GET',
    data: {queryForSuggestions}
  })
)

export const createSearchByCurrentUser = search => (
  $.ajax({
    url: `api/searches`,
    method: 'POST',
    data: {search}
  })
)

export const fetchSearchResults = queryForResults => (
  $.ajax({
    url: `api/searches`,
    method: 'GET',
    data: {queryForResults}
  })
)