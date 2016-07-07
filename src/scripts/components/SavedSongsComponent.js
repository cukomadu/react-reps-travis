import React from 'react'

var SavedSongsComponent = React.createClass({
  render: function(){
    console.log(this.props)

    return (
      <div>
        <h5><em>Saved Songs</em></h5>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            
            {            
              this.props.theSavedSongs.map(function(songModel){
                return <SingleSavedSong songData={songModel}/>              
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
})

var SingleSavedSong =  React.createClass({
  render: function(){
    return (
      <tr>
        <td>{this.props.songData.get('artist')}</td>
        <td>{this.props.songData.get('title')}</td>
      </tr>
    )
  }
})

export default SavedSongsComponent