// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on("add", this.addSong, this);
    this.on("ended", this.removeEndedSong, this);
    //this.on("dequeue", this.)
  },

  addSong : function(){
    if(this.models.length === 1){
      this.playFirst();
    }
  },

  removeEndedSong : function(){
    this.shift();
    if(this.models.length > 0){
      this.playFirst();
    }
  },

  playFirst : function(){
    this.models[0].play();
  }

});