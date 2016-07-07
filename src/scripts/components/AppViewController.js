import React from 'react'
import ReactDOM from 'react-dom'

import Backbone from 'Backbone'

import SongListComponent from './SongListComponent.js'
import SavedSongsComponent from './SavedSongsComponent.js'
import NavView from './NavView.js'

import {SongModel} from '../models/songModel.js'

const AppViewController = React.createClass({

  getInitialState: function(){
   
    return {
      currentView: "allSongsView",
      songList: this.props.songCollection.models,
      savedSongs: []
    }
    
  },


  _addSongToSongList: function(){

    var newSong = {
      artist: this.refs.songArtist.value ,  
      title:  this.refs.songTitle.value
    }

    var newSongModel = new SongModel(newSong)

    this.refs.songTitle.value  = ''
    this.refs.songArtist.value = ''

    var songListCopy = this.state.songList.map(function(copy){ return copy })
    songListCopy.push(newSongModel)
    
    this.setState({
      songList: songListCopy,
    })
  },

  componentDidMount: function(){
    var component = this;
    // (4) }}=== subscribe to 'song-saved', then update state
    Backbone.Events.on("song-saved", function(savedSong){
      console.log('COMPONENT Song Saved!', savedSong)
      
      console.log(component.state.savedSongs)

      var savedSongsCopy = component.state.savedSongs.map(function(copy){ return copy })
      savedSongsCopy.push(savedSong)

      component.setState({
        savedSongs: savedSongsCopy
      })
    })

    Backbone.Events.on("nav-to-view", function(navToThisView){
      component.setState({
        currentView: navToThisView
      })
    })
  },

  render: function(){
    var displayedView
    
    if(this.state.currentView === "allSongsView"){
      displayedView = <SongListComponent songListProps={this.state.songList} />
    }

    if(this.state.currentView === "savedSongsView"){
      displayedView = <SavedSongsComponent theSavedSongs={this.state.savedSongs}/>

    }    
    
    return (
      <div>
        <NavView/>
        <h2>React Jukebox</h2>

        {/* AddArtistComponent  */}
        <div className="row" ref="componentContainer">
          <div className="six columns">
            <label>Artist</label>
            <input className="u-full-width" type="text" ref="songArtist"/>
          </div>
          <div className="six columns">
            <label>Song</label>
            <input className="u-full-width" type="text" ref="songTitle"/>
          </div>
        </div>
        <input 
          type="button" 
          value="+" 
          className="button-primary" 
          onClick={this._addSongToSongList}
        />

        {displayedView}

      </div>
    )
  }
})



export default AppViewController