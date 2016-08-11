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
  	alert('shopping cart list');
  	var retrievedObject = localStorage.getItem('testObject');
    var ki = JSON.parse(retrievedObject);
    $("#sk").empty();
   $.each(ki, function (index, value) {

   	$("#sk").append("<li><a href='#'' class='item-link'><div class='item-content'><div class='item-inner'><div class='item-title'>"+index+"-----Amount Charged  "+value+"</div></div></div></a></li>");
  console.log(index+"  "+value);
});
  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.NotFound.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.NotFound.onCreated(function () {
});

Template.NotFound.onRendered(function () {
  var testObject = { 'Total Amount': 0, 'Total Items': 0};
  localStorage.setItem('testObject', JSON.stringify(testObject));
});

Template.NotFound.onDestroyed(function () {
});
