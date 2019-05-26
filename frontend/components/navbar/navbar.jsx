import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import SearchBarContainer from '../search_bar/search_bar_container'

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.openSessionForm = this.openSessionForm.bind(this);
  }

  handleLogout(){
    this.props.logout();
  }

  openSessionForm(type){
    const {openLoginFormModal, openSignupFormModal} = this.props;
    return (e) => {
      e.preventDefault();
      (type == 'login') ? openLoginFormModal() : openSignupFormModal();
    }
  }

  render(){
    const {currentUser} = this.props;
    const sessionDisplay = currentUser ? 
          <div className="nav-session-display">
            <div className="nav-session-item">
              <Link to='/upload'><button className="upload-button">Upload</button></Link>
            </div>
            <div className="nav-session-item">
              <Link to={`/users/${currentUser.id}`}><span className="header-greeting-text">{currentUser.username}</span></Link>
            </div>
            <div className="nav-session-item">
              <button className="session-button" onClick={this.handleLogout}>Log Out</button>
            </div>
          </div>
      : 
          <div className="nav-session-display">
            <div className="nav-session-item">
              <button className="session-button" onClick={this.openSessionForm('login')}>Sign In</button>
            </div>
            <div className="nav-session-item">
              <button className="session-button sign-up-button" onClick={this.openSessionForm('signup')}>Create Account</button>
            </div>
          </div>
  
    return(
      <div className="navbar">
        <Link to="/discover">
          <div className="logo">soundspace</div>
        </Link>
        <NavLink exact to="/discover" className="nav-button" activeClassName="nav-button-active">
            Home
        </NavLink>
        <NavLink to="/stream" className="nav-button" activeClassName="nav-button-active">
            Stream
        </NavLink>
        <NavLink to="/you/favorites" className="nav-button" isActive={(match, location) => location.pathname.startsWith('/you')} activeClassName="nav-button-active">
          
            Library
        </NavLink>
        <SearchBarContainer />
        {sessionDisplay}
      </div>
    )
  }
}

export default withRouter(Navbar);