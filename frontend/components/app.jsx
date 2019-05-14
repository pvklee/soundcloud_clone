import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import NavbarContainer from './navbar/navbar_container'

const App = () => (
  <div>
    <NavbarContainer />
    <Route path="/" />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;