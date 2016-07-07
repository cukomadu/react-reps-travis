import Backbone from 'Backbone'

export var SongModel = Backbone.Model.extend({})

export var SongCollection = Backbone.Collection.extend({
  model: SongModel
})