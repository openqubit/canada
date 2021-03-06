if (Meteor.isClient) {
  var MAP_ZOOM = 15;


  Template.first.onCreated(function() {
    var self = this;

    GoogleMaps.ready('first', function(firstmap) {
      var firstmarker;

      // Create and move the marker when latLng changes.
      self.autorun(function() {
        var latLng = Geolocation.latLng();
        if (! latLng)
          return;

        // If the marker doesn't yet exist, create it.
        if (! firstmarker) {
          firstmarker = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: firstmap.instance
          });
        }
        // The marker already exists, so we'll just change its position.
        else {
          firstmarker.setPosition(latLng);
        }

        // Center and zoom the map view onto the current position.
        //firstmap.instance.setCenter(firstmarker.getPosition());
        firstmap.instance.setZoom(MAP_ZOOM);
      });
    });
  });

  Template.first.helpers({
    geolocationError: function() {
      var error = Geolocation.error();
      return error && error.message;
    },
    firstOptions: function() {
      var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });
}
