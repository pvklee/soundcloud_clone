import React from 'react'

import WaveSurfer from 'wavesurfer.js'

const EVENTS = [
  'audioprocess',
  'error',
  'finish',
  'loading',
  'mouseup',
  'pause',
  'play',
  'ready',
  'scroll',
  'seek',
  'zoom',
]

const capitaliseFirstLetter = (string) =>
  string
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

const registerEventsFromProps = (waveSurfer, eventList, props) => {
  eventList.forEach(event => {
    const callBackProp = props[`on${capitaliseFirstLetter(event)}`]
    if (callBackProp)
      waveSurfer.on(event, (...args) =>
        callBackProp({waveSurfer, args}))
  })
}

const CONTAINER_ID = 'waveform'

export default class AudioPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      waveSurfer: null,
      isReady: false,
      timePlayed: 0,
      timePlayedNecessaryForCount: 30,
      playMarked: false,
      listenMarked: false
    };
    this.markListen = this.markListen.bind(this);
    this.markPlay = this.markPlay.bind(this);
  }

  componentDidMount() {
    let isReady = this.state.isReady;
    const defaultOptions = {container: `#${CONTAINER_ID + this.props.songId}`};
    const options = Object.assign({}, this.props.options, defaultOptions);

    const waveSurfer = WaveSurfer.create(options);

    waveSurfer.load(this.props.audioFile, this.props.peaks);

    waveSurfer.on('ready', () => {
      isReady = true
      if (this.props.playing) waveSurfer.play()
      this.setState({waveSurfer, isReady})
      if (waveSurfer.getDuration() < 30) {
        this.setState({timePlayedNecessaryForCount: (waveSurfer.getDuration() * .5)});
      }
    })

    waveSurfer.on('finish', () => {
      waveSurfer.seekTo(0);
      this.props.handleTogglePlay();
      if (this.state.playMarked) {this.setState({playMarked: false, timePlayed: 0})}
    })

    const {songDetail, handlePosChange, handleTogglePlay} = this.props;

    let startTime, endTime;

    waveSurfer.on('play', ()=>{
      startTime = new Date();
    })
    waveSurfer.on('audioprocess', () => {
      handlePosChange(waveSurfer.getCurrentTime());
      endTime = new Date();
      if (!this.state.listenMarked && this.state.timePlayed + (endTime - startTime)/1000 > 1) {this.markListen();};
      if (!this.state.playMarked && this.state.timePlayed + (endTime - startTime)/1000 > this.state.timePlayedNecessaryForCount) {this.markPlay();};
    });
    waveSurfer.on('pause', () => {
      endTime = new Date();
      const prevTimePlayed = this.state.timePlayed;
      const newTimePlayed = prevTimePlayed + (endTime - startTime) / 1000
      this.setState({timePlayed: newTimePlayed});
      handlePosChange(waveSurfer.getCurrentTime());
    });
    waveSurfer.on('seek', () => {
      handlePosChange(waveSurfer.getCurrentTime());
      if (!this.props.playing) handleTogglePlay();
    })


    registerEventsFromProps(waveSurfer, EVENTS, this.props);

    this.setState({waveSurfer, isReady});
  }

  componentWillUnmount() {
    if (this.state.waveSurfer) {
      const waveSurfer = Object.assign(this.state.waveSurfer);
      waveSurfer.destroy();
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.state.waveSurfer) {return null};
    const waveSurfer = Object.assign(this.state.waveSurfer)

    if ((this.props.playing !== nextProps.playing || waveSurfer.isPlaying() !== nextProps.playing))
      nextProps.playing ? waveSurfer.play() : waveSurfer.pause()
  }

  markPlay(){
    this.props.markPlayForSong(this.props.songId);
    this.setState({playMarked: true});
  }

  markListen(){
    //TODO
    // this.props.markListenForSong();
    this.setState({listenMarked: true});
  }

  render(){
    const {songId, className, loader} = this.props;
    return(
      <div id={CONTAINER_ID + songId} className={className}>
        {!this.state.isReady && loader}
      </div>
    )
  }
}

// AudioPlayer.propTypes = {
//   audioFile: PropTypes.any.required,
//   options: PropTypes.object,
//   className: PropTypes.string,
//   playing: PropTypes.bool,
//   peaks: PropTypes.array,
//   loader: PropTypes.any,
//   songId: PropTypes.any
// }
