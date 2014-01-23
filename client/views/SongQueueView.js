// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    var that = this;
    this.collection.on("add", that.render, that);
    this.collection.on("remove", that.render, that);
    this.render();
  },

  // render: function() {
  //   _.each(this.collection.models, function(model){
  //     var songQueueEntryView = new SongQueueEntryView({model : model});
  //     songQueueEntryView.render();
  //   });
  //   return this.$el;
  // }

  render: function() {
    //debugger;
    this.$el.html('<th>Now Playing &<td>Next Up:</td></th>');
    _.each(this.collection.models, function(model){
      var songQueueEntryView = new SongQueueEntryView({model : model});
      this.$el.append(songQueueEntryView.render());
    }, this);
    return this.$el;
  }

});
