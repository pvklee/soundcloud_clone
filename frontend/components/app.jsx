import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import SongFormContainer from './song_form/song_form_container'
import StreamIndexContainer from './stream/stream_index_container'
import NavbarContainer from './navbar/navbar_container'
import ModalContainer from './modal/modal_container'
import UserProfileContainer from './user_profile/user_profile_container'
import SongDetailContainer from './shared_song_index/song_detail_container'
import SearchIndexContainer from './search/search_index_container'
import LibraryContainer from './library/library_container'
// import Logout from './'

const App = () => (
  <div>
    <ModalContainer />
    <header className="header">
      <NavbarContainer />
    </header>
    <main className="main">
      <Route path="/stream" component={StreamIndexContainer}/>
      <Route path="/you" component={LibraryContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/upload" component={SongFormContainer} />
      <Route path="/users/:userId" component={UserProfileContainer} />
      <Route path="/songs/:songId" component={SongDetailContainer} />
      <Route path="/search" component={SearchIndexContainer} />
      {/* <AuthRoute path="/logout" component={Logout} /> */}
    </main>
    <footer>
    </footer>
  </div>
);

export default App;