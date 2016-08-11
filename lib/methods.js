/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({


'newfruitsorder': function(ki,names,telephonenumber,area){

      Fruits.insert({
        userid: 4,
        orderdata: ki,
        ordernames: names,
        ordernumber: telephonenumber,
        orderarea: area,
        orderstatus: 'unpaid'
    });
},
  'lib/method_name': function () {
    
    if (this.isSimulation) {
    //   // do some client stuff while waiting for
    //   // result from server.
    //   return;
    }
    // server method logic
  }
});
