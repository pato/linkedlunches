Events = new Mongo.Collection("events");


Template.body.helpers({
  events: function () {
    return Events.find({});
  }
});
