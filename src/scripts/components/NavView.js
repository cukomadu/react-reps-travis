import React from 'react'
import Actions from '../actions/actions.js'

const NavView = React.createClass({
  _handleNavClick: function(e){
    var selectedMenuBtn = e.target.dataset['menu']

    Actions.toggleAppView(selectedMenuBtn)
  },

  render: function(){
    return(
      <div>
        <button data-menu="allSongsView" onClick={this._handleNavClick}>All Songs</button>
        <button data-menu="savedSongsView" onClick={this._handleNavClick}>Saved Songs</button>
      </div>
    )
  }
})

export default NavView
