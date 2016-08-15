import { Meteor } from 'meteor/meteor';

//var MAP_ZOOM = 15;

Meteor.startup(() => {
  // code to run on server at startup
  GoogleMaps.load();
});
