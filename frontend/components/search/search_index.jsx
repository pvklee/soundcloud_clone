import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'
import UsersIndexItemContainer from '../shared_user_index/users_index_item_container'
export default class SearchIndex extends React.Component {
  componentDidMount(){
    const {query, fetchSearchResults, startLoading, stopLoading} = this.props;
    startLoading();
    fetchSearchResults(query)
      .then(()=>stopLoading());
    document.title = `Search results for "${query}"`
  }

  componentDidUpdate(prevProps){
    if(prevProps.query !== this.props.query){
      const {query, fetchSearchResults, startLoading, stopLoading} = this.props;
      startLoading();
      fetchSearchResults(query)
        .then(()=>stopLoading());
      document.title = `Search results for "${query}"`
    }
  }

  render(){
    const {query, songs, users, searchResultIds, loading} = this.props;

    if (loading) {return(
      <div className="loading-spinner">
        <div className="la-ball-clip-rotate la-dark la-3x">
          <div></div>
        </div>
      </div>
    )}

    if (!searchResultIds) {return null};

    const searchList = searchResultIds.map(result => {
      const {id, type} = result;
      switch(type){
        case 'song':
          const song = songs[id];
          if (!song) return null;
          return <SongsIndexItemContainer song={song} key={`search-result-song`+id} />
        case 'user':
          const user = users[id];
          if (!user) return null;
          return <UsersIndexItemContainer user={user} key={`search-result-user`+id} />
      }

    })

    return(
      <div>
        <div className="main-info-container">
          <span>{`Search results for "${query}"`}</span>
        </div>
        {searchList}
      </div>
    )
  }
}