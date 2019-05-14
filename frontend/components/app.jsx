import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div>
    HELLO
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;