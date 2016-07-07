import React from 'react'
import Actions from '../actions/actions.js'

const SongListComponent = React.createClass({
 
  render: function(){
    return (
      <div>
        <h3>Song List</h3>
        <ul>

          
          {
            this.props.songListProps.map(function(objVal){
              console.log(objVal)
              return <SongListing songInfo={objVal}/>

            })
          }          
        </ul>
      </div>
    )
  }
})

const SongListing = React.createClass({
  getInitialState: function(){
    return { 
      isImportant: true
    }
  },

  _addToHidden: function(){
    if( this.state.isImportant == true ){
      this.setState({
        isImportant: false
      })

    } else {
      this.setState({
        isImportant: true
      })
    }
  },

  _addToSaved: function(){
    // (2)
    Actions.addSongToSavedList(this.props.songInfo)
  },

  render: function(){
    var myClass
    
    if(this.state.isImportant){
      myClass = 'active'
    } else {
      myClass = 'unimportant'
    }

    console.log(this.props.songInfo)

    return (
      <li className={myClass}>

       <button onClick={this._addToSaved /*(1)*/} >Save For Later</button>
       &nbsp;
       <button onClick={this._addToHidden}>-</button>
       &nbsp;&nbsp;&nbsp;
       <strong>{this.props.songInfo.get('artist')}</strong> - {this.props.songInfo.get('title')}
     </li>
    )
  }
})



export default SongListComponent