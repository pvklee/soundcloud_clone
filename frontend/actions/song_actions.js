import * as APIUtil from '../util/song_api_util'

export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const REMOVE_SONG = "REMOVE_SONG"

const receiveSongs = ({songs, artists}) => ({
  type: RECEIVE_SONGS,
  songs,
  artists
})

const receiveSong = ({song, artist}) => ({
  type: RECEIVE_SONG,
  song,
  artist
})

const removeSong = ({songId, artistId}) => ({
  type: REMOVE_SONG,
  songId,
  artistId
})

//async

export const fetchSongs = bounds => dispatch => (
  APIUtil.fetchSongs(bounds)
    .then(songs => dispatch(receiveSongs(songs)))
)

export const fetchSong = id => dispatch => (
  APIUtil.fetchSong(id)
    .then(song => dispatch(receiveSong(song)))
)

export const fetchSongsFromUser = userId => dispatch => (
  APIUtil.fetchSongsFromUser(userId)
    .then(songs => dispatch(receiveSongs(songs)))
)

export const createSong = song => dispatch => (
  APIUtil.createSong(song)
    .then(song => dispatch(receiveSong(song)))
)

export const deleteSong = songId => dispatch => (
  APIUtil.deleteSong(songId)
    .then(song => dispatch(removeSong(song)))
)