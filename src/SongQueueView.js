var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    
    // this.collection.on('queue', function(song){
    //   this.get('songQueue').add(song); 
    //   console.log("teststsetsetse");
    // }, this);  
  },

  render: function() {

    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
