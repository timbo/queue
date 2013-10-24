Queue = Ember.Application.create();

//Routing

Queue.Router.map(function() {
  this.resource('guests', {path: '/'});
});

Queue.GuestsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('guest');
  }
});

//Controllers

Queue.GuestsController = Ember.ArrayController.extend();


// Models

Queue.ApplicationAdapter = DS.FixtureAdapter.extend();

Queue.Guest = DS.Model.extend({
  name: DS.attr('string')
});

// Fixtures

Queue.Guest.FIXTURES = [
  {
    id: 1,
    name: 'King Buzzo'
  },
  {
    id: 2,
    name: 'Patti Smith'
  },
  {
    id: 3,
    name: 'Lou Reed'
  },
  {
    id: 4,
    name: 'Black Francis'
  },
  {
    id: 5,
    name: 'Johnny Ramone'
  },
  {
    id: 6,
    name: 'Neil Young'
  },
  {
    id: 7,
    name: 'Joan Jett'
  }
];