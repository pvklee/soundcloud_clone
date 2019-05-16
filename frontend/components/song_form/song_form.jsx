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
      songUrl: ''
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

    this.props.createSong(formData)
      .then(data => this.props.history.push(`/users/${this.props.artistId}`));
  }

  updateFile(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ songUrl: reader.result, songFile: file});
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ songUrl: "", songFile: null });
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
              onChange={this.updateFile}
            />
          </label><br/>
          <ReactAudioPlayer
            src={this.state.songUrl}
            controls
          /><br/>
          <button onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}