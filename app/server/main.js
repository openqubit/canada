if (Meteor.isClient) {
  var MAP_ZOOM = 15;

  Meteor.startup(function() {
    GoogleMaps.load();
  });
}
