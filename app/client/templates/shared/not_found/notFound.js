/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.NotFound.events({
	'click .item-title': function() {
     
  },
  	'click #bananas': function() {
      
     var bv = $('#bananaval').val();
     var price = 10;
     var bv = price * parseInt(bv);
       var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"bananas":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #mango': function() {
     var bv = $('#mangoval').val();
     var price = 30;
     var bv = price * parseInt(bv);
       var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"mango":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #tomato': function() {
     var bv = $('#tomatoval').val();
     var price = 20;
     var bv = price * parseInt(bv);
      var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"tomato":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #avocado': function() {
     var bv = $('#avocadoval').val();
     var price = 30;
     var bv = price * parseInt(bv);
       var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"avocado":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #onion': function() {
     var bv = $('#onionval').val();
     var price = 50;
     var bv = price * parseInt(bv);
       var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"onion":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #tomato': function() {
     var bv = $('#tomatoval').val();
     var price = 50;
     var bv = price * parseInt(bv);
      var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"tomato":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
    'click #grapes': function() {
      var price = 100;
     var bv = price * parseInt(bv);
     var bv = $('#grapesval').val();
       var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"grapes":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #peaches': function() {
     var bv = $('#peachesval').val();
     var price = 200;
     var bv = price * parseInt(bv);
       var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"peaches":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #apples': function() {
     var bv = $('#applesval').val();
     var price = 100;
     var bv = price * parseInt(bv);
       var go = localStorage.getItem('testObject');

       var testObject = JSON.parse(go);

var obj2 = {"apples":bv};
var newObject = Object.assign(testObject, obj2);

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(newObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
  },
  'click #cart': function() {
  	var retrievedObject = localStorage.getItem('testObject');
    var ki = JSON.parse(retrievedObject);
    $("#sk").empty();
   $.each(ki, function (index, value) {

   	$("#sk").append("<li><a href='#'' class='item-link'><div class='item-content'><div class='item-inner'><div class='item-title'>"+index+"-----Amount Charged  "+value+"</div></div></div></a></li>");
  console.log(index+"  "+value);
});
  },
  'click #gobuy': function() {
     var telephonenumber = $('#telephonenumber').val();
     var names = $('#names').val();
     var area = $('#area').val();

     var retrievedObject = localStorage.getItem('testObject');
     var ki = JSON.parse(retrievedObject);

     Meteor.call('checkout',telephonenumber,names,area,retrievedObject);
// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
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
 GoogleMaps.ready('map', function(map) {
    var latLng = Geolocation.latLng();

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latLng.lat, latLng.lng),
      map: map.instance
    });
  });		
});

Template.NotFound.onRendered(function () {
	
	$.getJSON("https://freegeoip.net/json/", function(data) {

navigator.geolocation.getCurrentPosition(function (pos) {
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;
           
    var latitude = data.latitude;
    var longitude = data.longitude;
    
    var myLatLng = new google.maps.LatLng(lat,lng);
    var map = new google.maps.Map(document.getElementById("map"),
    {
        zoom: 15,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker(
    {
        position: myLatLng,
        map: map,
        title: 'clicked'
    });
});
});

  var testObject = { 'Total Amount': 0, 'Total Items': 0};
  localStorage.setItem('testObject', JSON.stringify(testObject));

var myInput = document.getElementsByTagName('input')[0];
myInput.addEventListener('keypress', function(e) {
  var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
  function keyAllowed() {
    var keys = [8,9,13,16,17,18,19,20,27,46,48,49,50,
                51,52,53,54,55,56,57,91,92,93];
    if (key && keys.indexOf(key) === -1)
      return false;
    else
      return true;
  }
  if (!keyAllowed())
    e.preventDefault();
}, false);

// EDIT: Disallow pasting non-number content
myInput.addEventListener('paste', function(e) {
  var pasteData = e.clipboardData.getData('text/plain');
  if (pasteData.match(/[^0-9]/))
    e.preventDefault();
}, false);


});

Template.NotFound.onDestroyed(function () {
});
