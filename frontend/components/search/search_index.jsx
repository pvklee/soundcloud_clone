import React from 'react'
import SongsIndexItemContainer from '../shared_song_index/songs_index_item_container'
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
      const song = songs[result.id];
      return <SongsIndexItemContainer song={song} key={`search-result`+result.type+result.id} />
    })

    return(
      <div>{searchList}</div>
    )
  }
}