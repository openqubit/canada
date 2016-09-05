
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
        
       myApp.confirm('<div class="list-block">'+
           '<ul>'+
          '<li><a href="#" class="item-link smart-select">'+
        '<select name="car" multiple maxlength="1">'+
          '<optgroup label="Categories">'+
            '<option value="honda">Hackathon</option>'+
            '<option value="lexus">Bar Mitzvah</option>'+
            '<option value="mazda">Birthday</option>'+
          '</optgroup>'+
        '</select>'+
        '<div class="item-content">'+
          '<div class="item-inner">'+
            '<div class="item-title">Event Type</div>'+
          '</div>'+
        '</div></a></li></ul></div>', 'Geo Canada',
      function () {
        Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng()});
      },
      function () {
      }
      );
      });

      var markers = {};

      Markers.find().observe({
        added: function (document) {
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.lat, document.lng),
            map: map.instance,
            id: document._id
          });

          google.maps.event.addListener(marker, 'dragend', function(event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
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

