/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
'checkout' : function(telephonenumber,names,area,retrievedObject){
Fruits.insert({
        userid: 4,
        orderdata: retrievedObject,
        ordernames: names,
        ordernumber: telephonenumber,
        orderarea: area,
        orderstatus: 'unpaid'
    });
}
});
