import React from 'react'
import {Link} from 'react-router-dom'

export default ({currentUser, logout}) => {
  const display = currentUser ? 
        <div className="">
          <span className="header-greeting-text">Hello {currentUser.username}!</span>
          <button className="session-button" onClick={logout}>Log Out</button>
        </div>
    : 
        <div className="header-greeting-content">
          <span className="header-greeting-text">Hello!</span>
          <Link to='/signup'><button className="session-button">Sign Up</button></Link>
          <Link to='/login'><button className="session-button">Log In</button></Link>  
        </div>

  return(
    <div>
      {display}
    </div>
  )
}
