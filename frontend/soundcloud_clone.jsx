import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import merge from 'lodash/merge'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  const preloadedState = {
    ui: {
      genres: window.GENRES
    }
  };
  delete window.GENRES;

  if (window.currentUser) {
    const additionToPreloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id },
      ui: {
        genres: window.GENRES
      }
    };
    merge(preloadedState, additionToPreloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  store = configureStore(preloadedState);

  //TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});