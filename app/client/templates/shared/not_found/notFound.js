/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
if (Meteor.isClient) {
  var MAP_ZOOM = 15;

 Meteor.startup(function() {  
  GoogleMaps.load({
    key: 'AIzaSyD81kt-LoD3_Vqyqhd1yw9YlHq8J3SHpEg'
  });
});
}

Template.NotFound.events({
'click #logout': function(){
    alert("You have been logged out!");
}	
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.NotFound.helpers({
geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
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

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.NotFound.onCreated(function () {
 var self = this;

  GoogleMaps.ready('map', function(map) {
    var marker;

    // Create and move the marker when latLng changes.
    self.autorun(function() {
      var latLng = Geolocation.latLng();
      if (! latLng)
        return;

      // If the marker doesn't yet exist, create it.
      if (! marker) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng.lat, latLng.lng),
          map: map.instance
        });
      }
      // The marker already exists, so we'll just change its position.
      else {
        marker.setPosition(latLng);
      }

      // Center and zoom the map view onto the current position.
      map.instance.setCenter(marker.getPosition());
      map.instance.setZoom(MAP_ZOOM);
    });
  });		
});

Template.NotFound.onRendered(function () {
var myApp = new Framework7();
 
var $$ = Dom7;
 
  myApp.modal({
    title:  'GeoCanada Login Service',
    text: 'Login With Any Of The Methods Provided',
    verticalButtons: true,
    buttons: [
      {
      	title: 'Google',
        text: '<i class="fa fa-google" aria-hidden="true"> Google</i>',
        onClick: function() {
          myApp.alert('Success!,logged in with Google.')
        }
      },
      {
      	title: 'Google+',
        text: '<i class="fa fa-google-plus" aria-hidden="true"> Google+</i>',
        onClick: function() {
          myApp.alert('Success!,logged in with Google+.')
        }
      },
      {
      	title: 'Facebook',
        text: '<i class="fa fa-facebook-official" aria-hidden="true"> Facebook</i>',
        onClick: function() {
          myApp.alert('Success!,logged in with Facebook.')
        }
      },
      {
      	title: 'Twitter',
        text: '<i class="fa fa-twitter-square" aria-hidden="true"> Twitter</i>',
        onClick: function() {
          myApp.alert('Success!,logged in with Twitter.')
        }
      }
    ]
  })

});

Template.NotFound.onDestroyed(function () {
});
