Queue = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//Routing

Queue.Router.map(function() {
  this.resource('guests', {path: '/'}, function() {

  });
});

Queue.GuestsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('guest');
  }
});

Queue.GuestsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('guests');
  }
});

//Controllers


Queue.GuestController = Ember.ObjectController.extend({
  actions: {
    removeGuest: function() {
      var guest = this.get('model');
      console.log(guest);
      guest.deleteRecord();
      guest.save();
    }
  }
});

Queue.GuestsController = Ember.ArrayController.extend({
  actions: {
    createGuest: function() {
      var name = this.get('newName'),
          vip = this.get('newVip');
      if (!name.trim()) { return; }

      var guest = this.store.createRecord('guest', {
        name: name,
        vip: vip
      });

      this.set('newName', '');
      this.set('newVip', false);

      guest.save();
    }
  }
});

// Models

Queue.ApplicationAdapter = DS.FixtureAdapter.extend();

Queue.Guest = DS.Model.extend({
  name: DS.attr('string'),
  vip: DS.attr('boolean')
});

// Fixtures

Queue.Guest.FIXTURES = [
  {
    id: 1,
    name: 'King Buzzo',
    vip: false
  },
  {
    id: 2,
    name: 'Patti Smith',
    vip: true
  },
  {
    id: 3,
    name: 'Lou Reed',
    vip: true
  },
  {
    id: 4,
    name: 'Black Francis',
    vip: true
  },
  {
    id: 5,
    name: 'Johnny Ramone',
    vip: false
  },
  {
    id: 6,
    name: 'Neil Young',
    vip: true
  },
  {
    id: 7,
    name: 'Joan Jett',
    vip: true
  },
  {
    id: 8,
    name: 'Mick Jones',
    vip: false
  },
  {
    id: 9,
    name: 'Paul Fox',
    vip: false
  }
];