/*****************************************************************************/
/*  Server Methods */
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
}

});
