import * as APIUtil from '../util/song_api_util'
import { receiveListens } from './listen_actions';

export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const REMOVE_SONG = "REMOVE_SONG"
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const RECEIVE_SONG_FORM_ERRORS = "RECEIVE_SONG_FORM_ERRORS"

const receiveSongs = ({songs, artists, discoverSongIds, streamSongIds}) => ({
  type: RECEIVE_SONGS,
  songs,
  artists,
  discoverSongIds,
  streamSongIds
})

const receiveSongFormErrors = err => ({
  type: RECEIVE_SONG_FORM_ERRORS,
  err
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

const receiveFavorite = ({userId, songId}) => {
  return ({
    type: RECEIVE_FAVORITE,
    userId,
    songId
  })
}

const removeFavorite = ({userId, songId}) => {
  return ({
    type: REMOVE_FAVORITE,
    userId,
    songId
  })
}

//async

export const fetchSongs = bounds => dispatch => (
  APIUtil.fetchSongs(bounds)
    .then(songs => dispatch(receiveSongs(songs)))
)

export const fetchSongsFromStream = bounds => dispatch => {
  return APIUtil.fetchSongsFromStream(bounds)
    .then(songs => dispatch(receiveSongs(songs)))
}

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
    .fail(err => dispatch(receiveSongFormErrors(err.responseJSON)))
)

export const deleteSong = songId => dispatch => (
  APIUtil.deleteSong(songId)
    .then(song => dispatch(removeSong(song)))
)

export const favoriteSong = (songId, userId) => dispatch => (
  APIUtil.favoriteSong(songId, userId)
    .then(favorite => dispatch(receiveFavorite(favorite)))
)

export const unfavoriteSong = (songId, userId) => dispatch => (
  APIUtil.unfavoriteSong(songId, userId)
    .then(favorite => dispatch(removeFavorite(favorite)))
)

export const updateSongArt = (song) => dispatch => (
  APIUtil.updateSongArt(song)
    .then(song => dispatch(receiveSong(song)))
)

export const markPlayForSong = songId => dispatch => (
  APIUtil.markPlayForSong(songId)
    .then(song => dispatch(receiveSong(song)))
)

export const fetchFavoriteSongsOfUser = userId => dispatch => (
  APIUtil.fetchFavoriteSongsOfUser(userId)
    .then(songs => dispatch(receiveSongs(songs)))
)

export const fetchListenedSongsOfUser = userId => dispatch => (
  APIUtil.fetchListenedSongsOfUser(userId)
    .then(songs => {
      dispatch(receiveSongs(songs));
      dispatch(receiveListens(songs));
    })
)