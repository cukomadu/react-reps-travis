import React from 'react'
import ReactDOM from 'react-dom'

import Backbone from 'backbone'

import {SongCollection} from './models/songModel.js'

import AppViewController from './components/AppViewController.js'


var AppRouter = Backbone.Router.extend({
  routes: {
    "*path" : "showHome"
  },

  showHome: function(){
    var songListArray = [
      {artist: 'Matthew West', title: 'Strong Enough'},
      {artist: 'Taylor Swift', title: 'Shake It Off'},
      {artist: 'Yolanda Adams', title: 'Fragile Heart'}
    ]

    var songColl = new SongCollection(songListArray)
    ReactDOM.render(<AppViewController songCollection={songColl}/>,document.querySelector('.container'))
  },

  initialize: function(){
    //console.log('app routing')
    Backbone.history.start()
  }
})

var router = new AppRouter()


