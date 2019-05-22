import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import FavoritesIndexContainer from './favorites_index_container'
import HistoryIndexContainer from './history_index_container'

export default class Library extends React.Component {
  componentDidMount(){
    const {currentUserId, fetchFavoriteSongsOfUser, fetchListenedSongsOfUser} = this.props;
    fetchFavoriteSongsOfUser(currentUserId);
    fetchListenedSongsOfUser(currentUserId);
  }
  render(){
    const {currentUser, currentUserId, songs} = this.props;
    return(
      <div>
        <div>
          <NavLink to="/you/favorites" className="nav-button" activeClassName="nav-button-active">
              Favorites
          </NavLink>
          <NavLink to="/you/history" className="nav-button" activeClassName="nav-button-active">
              History
          </NavLink>
          <NavLink to="/you/following" className="nav-button" activeClassName="nav-button-active">
              Following
          </NavLink>
        </div>
        <div>
          <Route path="/you/favorites" component={FavoritesIndexContainer}/>
          <Route path="/you/history" component={HistoryIndexContainer}/>
        </div>
      </div>
    )
  }
}