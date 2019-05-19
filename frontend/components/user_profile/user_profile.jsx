import React from 'react'
import UserSongsIndexContainer from './user_songs_index_container'

export default class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.onProfilePictureChange = this.onProfilePictureChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
    this.props.fetchSongsFromUser(this.props.userId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.userId);
      this.props.fetchSongsFromUser(this.props.userId);
    }
  }

  onProfilePictureChange(e){
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    if (file) {
      formData.append('profilePictureFile', file);
    }
    this.props.updateUserProfilePicture({
      formData: formData,
      userId: this.props.user.id
    })
  }

  render(){
    const {user, currentUserId} = this.props
    if (!user) return null;

    const changeProfilePictureButton = (user.id == currentUserId) ? (
      <input
        type="file"
        onChange={this.onProfilePictureChange}
      />
    ) : ''

    const createdSongIds = user.createdSongIds || []
    return (
      <div>
        <img className="user-profile-picture" src={user.profilePictureUrl}/>
        {changeProfilePictureButton}
        {user.username}
        <UserSongsIndexContainer songIds={createdSongIds}/>
      </div>
    )
  }
}
