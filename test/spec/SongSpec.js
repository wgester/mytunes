describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
    spyOn(model, 'trigger').andCallThrough();
  });

  describe('play', function() {
    xit('triggers a "play" event', function() {
      model.play();
      expect(model.trigger).toHaveBeenCalledWith('play', model);
    });
  });

  describe('enqueue', function() {
    xit('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(model.trigger).toHaveBeenCalledWith('enqueue', model);
    });
  });

  describe('dequeue', function() {
    xit('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(model.trigger).toHaveBeenCalledWith('dequeue', model);
    });
  });

  describe('ended', function() {
    xit('triggers an "ended" event', function() {
      model.play();
      model.ended();
      expect(model.trigger).toHaveBeenCalledWith('ended', model);
    });
  });
});
