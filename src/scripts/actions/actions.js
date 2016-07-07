import Backbone from 'Backbone'

var Actions = {
  addSongToSavedList: function(song){
    console.log('ACTION: adding song to Saved List', song)
    // (3) notify AppViewController of 'song-saved' event ===>
    Backbone.Events.trigger("song-saved", song)
  },

  toggleAppView : function(viewClicked){
    Backbone.Events.trigger("nav-to-view", viewClicked)
  }
  
}


export default Actions

