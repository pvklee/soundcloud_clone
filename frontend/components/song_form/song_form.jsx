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
      artUrl: '',
      errors: []
    };
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    document.title = "Upload"
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
      .then(data => this.props.history.push(`/users/${this.props.artistId}`))
      .fail(() => this.setState({errors: this.props.errors}))
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
    let songFormArt;
    if (this.state.artUrl){
      songFormArt = (
        <div className="song-form-item song-index-item-art-container">
          <img src={this.state.artUrl} className="song-index-item-art"/>
        </div>
      )
    }

    const songAudioPlayer = (this.state.songUrl) ? (
      <div className="song-form-item">
        <ReactAudioPlayer
          src={this.state.songUrl}
          controls />
      </div>
    ) : (
      null
    )

    const errorMessages = this.state.errors.map(error => <li key={error}>{error}</li>);

    return(
      <div className="song-form-outer-container">
        <form className="song-form">
          <div className="song-form-title">Upload your creation.</div>
          <div className="song-form-errors">
            <ul>{errorMessages}</ul>
          </div>
          <div className="song-form-item">
            <label>Title:
              <input 
                type="text"
                value={this.state.description} 
                onChange={this.update('title')}/>
            </label>
          </div>
          <div className="song-form-item">
            <label>Genre:
              <select
                value={this.state.genre}
                onChange={this.update('genre')}
              >
                {this.props.genres.map((genre, i) => {
                  return <option value={genre} key={i}>{genre}</option>;
                })}
              </select>
            </label>
          </div>
          <div className="song-form-item">
            <label className="song-form-upload-button">
              Upload Song
              <input
                type="file"
                onChange={this.updateFile('song')}
              />
            </label>
          </div>
            {songAudioPlayer}
          <div className="song-form-item">
            <label className="song-form-upload-button">
              Upload Art
              <input
                type="file"
                onChange={this.updateFile('art')}
              />
            </label>
          </div>
            {songFormArt}
          <button className="song-form-submit" onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}