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
      isReady: false
    };
  }

  componentDidMount() {
    let isReady = this.state.isReady;
    const defaultOptions = {container: `#${CONTAINER_ID + this.props.divId}`};
    const options = Object.assign({}, this.props.options, defaultOptions);

    const waveSurfer = WaveSurfer.create(options);

    waveSurfer.load(this.props.audioFile, this.props.peaks);

    waveSurfer.on('ready', () => {
      isReady = true
      if (this.props.playing) waveSurfer.play()
      this.setState({waveSurfer, isReady})
    })

    waveSurfer.on('finish', () => {
      waveSurfer.seekTo(0);
      this.props.handleTogglePlay();
    })
    
    const {songDetail, setCurrentSongTime, handlePosChange, handleTogglePlay} = this.props;

    waveSurfer.on('play', () => {
      
    });
    waveSurfer.on('audioprocess', () => {
      handlePosChange(waveSurfer.getCurrentTime());
    });
    waveSurfer.on('pause', () => {
      // if(songDetail) setCurrentSongTime(waveSurfer.getCurrentTime());
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

  render(){
    const {divId, className, loader} = this.props;
    return(
      <div id={CONTAINER_ID + divId} className={className}>
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
//   divId: PropTypes.any
// }
