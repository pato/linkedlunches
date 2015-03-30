/* Databases */
Events = new Mongo.Collection("events");


/* Template Helpers */
Template.body.helpers({
  events: function () {
    return Events.find({});
  }
});

/* Routes */
Router.map(function(){
    this.route('home', {path: '/'} );
    this.route('events', {path: '/events'} );
    this.route('profile', {
      path: '/profile/:profileId',
      data: {
        profileId: this.params.profileId,
      },
    });
});
