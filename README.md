# SoundSpace

![screenshot](https://github.com/pvklee/soundcloud_clone/blob/master/readme_images/Screen%20Shot%202019-05-26%20at%201.21.17%20PM.png)

A SoundCloud clone built with React, Redux, and Ruby on Rails. A space to share and discover new music.

Users can upload songs, follow other users, favorite songs, comment on songs, and search for other users/songs. 

[Link to live site](https://pvklee-soundcloud-clone.herokuapp.com/) 

## Technologies used

I used Ruby on Rails for the backend, including user authentication and MVC patterns. I used PostgreSQL to store the data.

For the frontend, I used React for the single-page application UI and Redux for state management.

For the waveform graphics, I found a cool waveform visualizer called [wavesurfer.js](https://github.com/katspaugh/wavesurfer.js/blob/master/README.md), which I wrapped with a React component.

## Highlighted features

* Utilized Amazon S3 cloud services for audio and image files to reduce server load.
* Made audio waveform visualizations using wavesurfer.js library and a custom React component.
* Designed re-usable React components for songs, users, search results, and comments.
* Custom Ruby on Rails endpoints for filtering songs from all users, followed users, or a single user.
* Ensured user privacy through BCrypt authentication and protected routes.
