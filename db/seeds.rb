# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

amazonpath = "https://s3-us-west-1.amazonaws.com/pvklee-soundcloud-pro/"

users = [
  {
    username: "snailmail",
    password: "passwordpassword",
    picture: "snailmail_pic.jpeg"
  },
  {
    username: "kendricklamar",
    password: "passwordpassword",
    picture: "kendricklamar_pic.jpg"
  },
  {
    username: "radiohead",
    password: "passwordpassword",
    picture: "radiohead_pic.png"
  },
  {
    username: "pinkfloyd",
    password: "passwordpassword",
    picture: "pinkfloyd_pic.jpg"
  },
  {
    username: "chopin",
    password: "passwordpassword",
    picture: "chopin_pic.jpg"
  }
]

songs = [
  {
    title: "lets find an out",
    username: "snailmail",
    genre: "Indie",
    art: "letsfindanout_art.png",
    songfile: "letsfindanout_song.wav"
  },
  {
    title: "king kunta",
    username: "kendricklamar",
    genre: "Hip-hop & Rap",
    art: "kingkunta_art.jpg",
    songfile: "kingkunta_song.wav"
  },
  {
    title: "karma police",
    username: "radiohead",
    genre: "Rock",
    art: "karmapolice_art.jpg",
    songfile: "karmapolice_song.wav"
  },
  {
    title: "wish you were here",
    username: "pinkfloyd",
    genre: "Rock",
    art: "wishyouwerehere_art.png",
    songfile: "wishyouwerehere_song.wav"
  },
  {
    title: "nocturne op9 no2",
    username: "chopin",
    genre: "Piano",
    art: "nocturne_art.jpeg",
    songfile: "nocturne_song.wav"
  }
]

users.each do |user|
  new_user = User.new(username: user[:username], password: user[:password])
  picture = open(amazonpath + user[:picture])
  new_user.profilePictureFile.attach(io: picture, filename: user[:picture])
  new_user.save
end

songs.each do |song|
  artist_id = User.find_by(username: song[:username]).id
  new_song = Song.new(artist_id: artist_id, title: song[:title], genre: song[:genre])
  art = open(amazonpath + song[:art])
  songfile = open(amazonpath + song[:songfile])
  new_song.artFile.attach(io: art, filename: song[:art])
  new_song.songFile.attach(io: songfile, filename: song[:songfile])
  new_song.save
end