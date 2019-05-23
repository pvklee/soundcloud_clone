import React from 'react'
import UserSongsIndexContainer from './user_songs_index_container'

export default class UserProfile extends React.Component {
  constructor(props){
    super(props);

    const following = this.props.currentUser.usersFollowing ? !! this.props.currentUser.usersFollowing[this.props.userId] : false;
    this.state = {
      following: following
    }

    this.onProfilePictureChange = this.onProfilePictureChange.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.setFollowUser = this.setFollowUser.bind(this);
    this.setUnfollowUser = this.setUnfollowUser.bind(this);
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

  toggleFollow(e){
    e.preventDefault();
    this.state.following ? this.setUnfollowUser() : this.setFollowUser();
  }

  setFollowUser(){
    const {user, followUser} = this.props;
    followUser(user.id);
    this.setState({following: true})
  }

  setUnfollowUser(){
    const {user, unfollowUser} = this.props;
    unfollowUser(user.id);
    this.setState({following: false})
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

    const followButtonText = this.state.following ? 'Following' : 'Follow';

    const createdSongIds = user.createdSongIds || []
    return (
      <div>
        <img className="user-profile-picture" src={user.profilePictureUrl}/>
        {changeProfilePictureButton}
        {user.username}
        <button onClick={this.toggleFollow}>{followButtonText}</button>
        <UserSongsIndexContainer songIds={createdSongIds}/>
      </div>
    )
  }
}
