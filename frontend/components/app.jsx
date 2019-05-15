import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import NavbarContainer from './navbar/navbar_container'
import ModalContainer from './modal/modal_container'
// import Logout from './'

const App = () => (
  <div>
    <ModalContainer />
    <header className="header">
      <NavbarContainer />
    </header>
    <main>
      <Route path="/" />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <AuthRoute path="/logout" component={Logout} /> */}
    </main>
    <footer>
    </footer>
  </div>
);

export default App;