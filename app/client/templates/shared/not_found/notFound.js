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
  Meteor.logout();
    document.location.reload(true);
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
  },
  map2Options: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.NotFound.onCreated(function () {
  
   GoogleMaps.ready('map2', function(map2) {
     
     google.maps.event.trigger(map2,'resize');
      
      google.maps.event.addListener(map2.instance, 'click', function(event) {
        Merkel.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      });
    
      var markers = {};

      Merkel.find().observe({
        added: function (document) {
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.lat, document.lng),
            map: map2.instance,
            id: document._id
          });

          google.maps.event.addListener(marker, 'dragend', function(event) {
            Merkel.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
          });

          markers[document._id] = marker;
        },
        changed: function (newDocument, oldDocument) {
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
        },
        removed: function (oldDocument) {
          markers[oldDocument._id].setMap(null);
          google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
          delete markers[oldDocument._id];
        }
      });
    });
    
    
 var self = this;

  GoogleMaps.ready('map', function(map) {
    var marker;
   google.maps.event.trigger(map,'resize');
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
          Meteor.loginWithGoogle({
        requestPermissions: ['email']
       }, function(error) {
      if (error) {
    console.log(error); //If there is any error, will get error here
    document.location.reload(true);
     }else{
    console.log(Meteor.user());// If there is successful login, you will get login details here
     }
     });
        }
      },
      {
      	title: 'Facebook',
        text: '<i class="fa fa-facebook-official" aria-hidden="true"> Facebook</i>',
        onClick: function() {
           Meteor.loginWithFacebook({
        requestPermissions: ['email']
       }, function(error) {
      if (error) {
    console.log(error); //If there is any error, will get error here
    document.location.reload(true);
     }else{
    console.log(Meteor.user());// If there is successful login, you will get login details here
     }
     });
        }
      },
      {
      	title: 'Twitter',
        text: '<i class="fa fa-twitter-square" aria-hidden="true"> Twitter</i>',
        onClick: function() {
          Meteor.loginWithTwitter({
        requestPermissions: ['email']
       }, function(error) {
      if (error) {
    console.log(error); //If there is any error, will get error here
    document.location.reload(true);
     }else{
    console.log(Meteor.user());// If there is successful login, you will get login details here
     }
     });
        }
      }
    ]
  })

});

Template.NotFound.onDestroyed(function () {
});
