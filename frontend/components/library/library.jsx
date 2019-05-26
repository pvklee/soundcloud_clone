import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import FavoritesIndexContainer from './favorites_index_container'
import HistoryIndexContainer from './history_index_container'
import FollowingIndexContainer from './following_index_container'

export default class Library extends React.Component {
  componentDidMount(){
    const {currentUserId, fetchFavoriteSongsOfUser, fetchListenedSongsOfUser} = this.props;
  }
  render(){
    return(
      <div>
        <div className="library-nav-bar">
          <NavLink to="/you/favorites" className="library-nav-button" activeClassName="library-nav-button-active">
              Favorites
          </NavLink>
          <NavLink to="/you/history" className="library-nav-button" activeClassName="library-nav-button-active">
              History
          </NavLink>
          <NavLink to="/you/following" className="library-nav-button" activeClassName="library-nav-button-active">
              Following
          </NavLink>
        </div>
        <div>
          <Route path="/you/favorites" component={FavoritesIndexContainer}/>
          <Route path="/you/history" component={HistoryIndexContainer}/>
          <Route path="/you/following" component={FollowingIndexContainer}/>
        </div>
      </div>
    )
  }
}