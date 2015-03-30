Events = new Mongo.Collection("events");
People = new Mongo.Collection("people");

/**
 * Event structure
 * {
 *  people: {},
 *  max_people: int,
 *  location: string,
 *  datetime: string,
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
