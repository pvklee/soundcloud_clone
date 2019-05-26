import React from 'react'
import UserSongsIndexContainer from './user_songs_index_container'

export default class UserProfile extends React.Component {
  constructor(props){
    super(props);

    let followingState;
    if(this.props.currentUser && this.props.currentUser.usersFollowedIds){
      followingState = this.props.currentUser.usersFollowedIds.includes(parseInt(this.props.userId));
    } else {
      followingState = false;
    }

    this.state = {
      following: followingState
    }

    this.onProfilePictureChange = this.onProfilePictureChange.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.setFollowUser = this.setFollowUser.bind(this);
    this.setUnfollowUser = this.setUnfollowUser.bind(this);
  }

  componentDidMount(){
    document.title = "Loading user...";
    this.props.startLoading();
    this.props.fetchUser(this.props.userId).then(()=>(
      document.title = this.props.user.username
    ));
    this.props.fetchSongsFromUser(this.props.userId)
      .then(()=>
        this.props.stopLoading()
      );
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
    if(!this.props.currentUser) {this.props.openLoginFormModal();}
    else {
      this.state.following ? this.setUnfollowUser() : this.setFollowUser();
    }
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
        <label className="change-profile-picture-button">
          Change Picture
          <input
            type="file"
            onChange={this.onProfilePictureChange}
          />
        </label>
    ) : ''

    const image = user.profilePictureUrl ? <img src={user.profilePictureUrl}/> : null;

    const followButtonText = this.state.following ? 'Following' : 'Follow';
    const followButtonClass = this.state.following? 'follow-button follow-button-following' : 'follow-button follow-button-follow'

    const createdSongIds = user.createdSongIds || []
    return (
      <div>
        <div className="user-profile-picture-username-follow">
          <div>
            <div className="user-profile-picture">
              {image}
            </div>
            {changeProfilePictureButton}
          </div>
          <div className="user-profile-username-follow">
            <span className="user-profile-username">{user.username}</span>
            <button onClick={this.toggleFollow} className={followButtonClass}>{followButtonText}</button>
          </div>
        </div>
        <UserSongsIndexContainer songIds={createdSongIds}/>
      </div>
    )
  }
}
