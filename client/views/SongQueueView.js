// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    this.collection.on("add", that.render, that);
    this.collection.on("remove", that.render, that);
  },

  // render: function() {
  //   _.each(this.collection.models, function(model){
  //     var songQueueEntryView = new SongQueueEntryView({model : model});
  //     songQueueEntryView.render();
  //   });
  //   return this.$el;
  // }

  render: function() {
    this.$el.html('');
    _.each(this.collection.models, function(model){
      var songQueueEntryView = new SongQueueEntryView({model : model});
      this.$el.append(songQueueEntryView.render());
    }, this);
    return this.$el;
  }

});
