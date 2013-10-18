Queue = Ember.Application.create();

Queue.Router.map(function() {
  // put your routes here
});

Queue.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
