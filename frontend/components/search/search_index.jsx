import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'
import UsersIndexItemContainer from '../shared_user_index/users_index_item_container'
export default class SearchIndex extends React.Component {
  componentDidMount(){
    const {query, fetchSearchResults} = this.props;
    fetchSearchResults(query);
  }

  componentDidUpdate(prevProps){
    if(prevProps.query !== this.props.query){
      this.props.fetchSearchResults(this.props.query);
    }
  }

  render(){
    const {query, songs, users, searchResultIds} = this.props;
    
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
      <div>{searchList}</div>
    )
  }
}