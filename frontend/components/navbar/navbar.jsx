import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import SearchBarContainer from '../search_bar/search_bar_container'

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout()
      .then(()=>this.props.history.push('/logout'))
  }

  render(){
    const {currentUser} = this.props;
    const sessionDisplay = currentUser ? 
          <div className="nav-session-display">
            <div className="nav-session-item">
              <Link to='/upload'><button className="upload-button">Upload</button></Link>
            </div>
            <div className="nav-session-item">
              <Link to={`/users/${currentUser.id}`}><span className="header-greeting-text">Hello {currentUser.username}!</span></Link>
            </div>
            <div className="nav-session-item">
              <button className="session-button" onClick={this.handleLogout}>Log Out</button>
            </div>
          </div>
      : 
          <div className="nav-session-display">
            <div className="nav-session-item">
              <span className="header-greeting-text">Hello!</span>
            </div>
            <div className="nav-session-item">
              <Link to='/login'><button className="session-button">Sign In</button></Link> 
            </div>
            <div className="nav-session-item">
              <Link to='/signup'><button className="session-button sign-up-button">Create Account</button></Link>
            </div>
          </div>
  
    return(
      <div className="navbar">
        <Link to="/">
          <div className="logo" />
        </Link>
        <NavLink exact to="/" className="nav-button" activeClassName="nav-button-active">
            Home
        </NavLink>
        <NavLink to="/stream" className="nav-button" activeClassName="nav-button-active">
            Stream
        </NavLink>
        <NavLink to="/you/library" className="nav-button" isActive={(match, location) => location.pathname.startsWith('/you')} activeClassName="nav-button-active">
          
            Library
        </NavLink>
        <SearchBarContainer />
        {sessionDisplay}
      </div>
    )
  }
}

export default withRouter(Navbar);