  Meteor.publish('users', function () {
    return Meteor.users.find({_id: this.userId}, {fields: {_id: 1, profile: 1, login: 1, email: 1}});
  });

Meteor.publish('paradise', function () {
  return Amish.find();
});

Meteor.publish('amish', function () {
  return Amish.find();
});

Meteor.publish('here', function () {
  return Here.find();
});

Meteor.publish('markers', function () {
  return Markers.find();
});

Meteor.publish('ft', function () {
  return Ft.find();
});

Meteor.publish('fruits', function () {
  return Fruits.find();
});

Meteor.publish('af', function () {
  return Af.find();
});

Meteor.publish('pc', function () {
  return Pc.find();
});

Meteor.publish('invites', function () {
  return Invites.find();
});

Meteor.publish('ja', function () {
  return Ja.find();
});

Meteor.publish('orders', function () {
  return Orders.find();
});

Meteor.publish('payments', function () {
  return Payments.find();
});

Meteor.publish('dl', function () {
  return Dl.find();
});

Meteor.publish('al', function () {
  return Al.find();
});

Meteor.publish('di', function () {
  return Di.find();
});
ReactiveTable.publish("tindersettings",
    function () {
            return Ti;
  }
);

Meteor.publish('ti', function () {
  return Ti.find();
});
