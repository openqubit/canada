
if (Meteor.isClient) {
  Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
      google.maps.event.addListener(map.instance, 'click', function(event) {
        var ln = localStorage.getItem("lastname");
        var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location;
       var lastSegment = url.split('/').pop();
        //alert("the cors iframe bridge parameter is  "+lastSegment);
        var myApp = new Framework7();
 
        var $$ = Dom7;
        
       myApp.confirm('<select id="eventcategory" name="category">'+
            '<option value="hackathon">Hackathon</option>'+
              '<option value="birthday">Birthday</option>'+
              '<option value="bar">Bar Mitzvah</option>'+
            '</select>'+
            '<br/><br/><select id="eventowner" name="owner">'+
            '<option value="3">Me</option>'+
              '<option value="4">Other</option>'+
            '</select>', 'Geo Canada Create Event',
      function () {
         var ec = $('#eventcategory').val();
        var eo = $('#eventowner').val();
        Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng(), eventowner:eo, eventcategory: ec,datecreated: new Date()});
      },
      function () {
       
      }
      );
      });

      var markers = {};

      Markers.find().observe({
        added: function (document) {
          var icon;
              if(document.eventowner == '3'){
                var icon = 'http://maps.google.com/mapfiles/kml/shapes/hospitals.png';
              }
              else{
                var icon = 'http://maps.google.com/mapfiles/kml/shapes/snowflake_simple.png';
              }
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.lat, document.lng),
            map: map.instance,
            id: document._id,
            icon: icon
          });

          google.maps.event.addListener(marker, 'dragend', function(event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
          });
          
          var infoWindow = new google.maps.InfoWindow({
            var kon = "This is a an event. HTML goes here.";
                content: kon
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map.instance, marker);
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
  });

if (Meteor.isClient) {
  Meteor.startup(function() {
    console.log('hello');
    GoogleMaps.load({
    key: 'AIzaSyD81kt-LoD3_Vqyqhd1yw9YlHq8J3SHpEg'
    });
  });
}

  Template.map.helpers({
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }
  });
}

