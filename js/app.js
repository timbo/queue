Queue = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//Routing

Queue.Router.map(function() {
  this.resource('occasions', {path: '/'}, function() {
    this.resource('occasion', { path: 'occasion_id' });
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

Queue.OccasionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('occasion');
  }
});

Queue.OccasionsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('occasions');
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

Queue.OccasionController = Ember.ObjectController.extend({
  actions: {
    removeOccasion: function() {
      var occasion = this.get('model');
      occasion.deleteRecord();
      occasion.save();
    }
  }
});

Queue.OccasionsController = Ember.ArrayController.extend({
  actions: {
    createOccasion: function() {
      var name = this.get('newName');
      if (!name.trim()) { return; }

      var occasion = this.store.createRecord('occasion', {
        name: name
      });

      this.set('newName', '');

      occasion.save();
    }
  }
});

// Models

Queue.ApplicationAdapter = DS.FixtureAdapter.extend();

Queue.Guest = DS.Model.extend({
  name: DS.attr('string'),
  vip: DS.attr('boolean')//,
  //post: DS.belongsTo('occasion')
});

Queue.Occasion = DS.Model.extend({
  name: DS.attr('string')//,
  //comments: DS.hasMany('guest')
});

// Fixtures

Queue.Occasion.FIXTURES = [{
  id: 1,
  name: "All Tomorrow's Parties",
  guests: [1,2,3,4,5,6,7,8,9]
}];

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