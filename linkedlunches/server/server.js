Events = new Mongo.Collection("events");
People = new Mongo.Collection("people");

chance = new Chance()

/**
 * Event structure
 * {
 *  name: string,
 *  people: [],
 *  max_people: int,
 *  event_location: string,
 *  event_datetime: moment,
 *  created_datetime: moment,
 *  url: string,
 *  interest: string,
 * }  
 */

/**
 * People structure
 * {
 *  name: string.
 *  email: string,
 *  fb_auth: string,
 *  linkedin_auth: string.
 *  food_preferances: {},
 *  location: string,
 *  times: {},
 *  phone_number: string
 *  events: {}
 * }
 */

Meteor.methods({
  /* Event methods */
  addEvent: function(name, max_people, event_location, event_datetime, interest) {
    // Make sure the user is logged in before inserting
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    newEvent = {
      name: name,
      people: {},
      max_people: max_people,
      event_location: event_location,
      event_datetime: event_datetime,
      interest: interest,
      created_datetime: moment(),
      url: chance.word({syllables: 3})
    }
    Events.insert(newEvent);
  },
  deleteEvent: function (eventId) {
    Events.remove(eventId);
  },
  addPerson: function(eventId, person) {
    Events.update(eventId, { $push: { people: person} });    
  },
  addPeople: function(eventId, people) {
    $.each(people, function (person) {
      addPerson(eventId, person);
    });
  }
});
