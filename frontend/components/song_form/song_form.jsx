import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default class SongForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      artist_id: this.props.artistId,
      genre: 'Ambient',
      songFile: null,
      songUrl: '',
      artFile: null,
      artUrl: ''
    };
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    formData.append('song[artist_id]', this.state.artist_id);
    formData.append('song[genre]', this.state.genre);

    if (this.state.songFile) {
      formData.append('song[songFile]', this.state.songFile);
    }
    if (this.state.artFile) {
      formData.append('song[artFile]', this.state.artFile);
    }

    this.props.createSong(formData)
      .then(data => this.props.history.push(`/users/${this.props.artistId}`));
  }

  updateFile(type){
    return e => {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];

      let urlType, fileType;
      switch(type){
        case 'art':
          urlType = 'artUrl';
          fileType = 'artFile';
          break;
        case 'song':
          urlType = 'songUrl';
          fileType = 'songFile';
          break;
      }
      reader.onloadend = () => {
        this.setState({ [urlType]: reader.result, [fileType]: file});
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ [urlType]: "", [fileType]: null });
      }
    }
  }

  render(){
    return(
      <div>
        <form>
          <label>Title:
            <input 
              type="text"
              value={this.state.description} 
              onChange={this.update('title')}/>
          </label><br/>
          <label>Type:
            <select
              value={this.state.genre}
              onChange={this.update('genre')}
            >
              {this.props.genres.map((genre, i) => {
                return <option value={genre} key={i}>{genre}</option>;
              })}
            </select>
          </label><br/>
          <label>Song:
            <input
              type="file"
              onChange={this.updateFile('song')}
            />
          </label><br/>
          <ReactAudioPlayer
            src={this.state.songUrl}
            controls
          /><br/>
          <label>Art:
            <input
              type="file"
              onChange={this.updateFile('art')}
            />
          </label><br/>
          <img src={this.state.artUrl} />
          <button onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}