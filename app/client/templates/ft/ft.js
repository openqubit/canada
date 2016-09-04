
/*****************************************************************************/
/* Ft: Event Handlers */
/*****************************************************************************/
Template.Ft.events({
    'change .settings': function(event, template) {

    FS.Utility.eachFile(event,function(file){

        var fileObj=new FS.File(file);

        Uploads.insert(fileObj,function(err){
            
            var lspath = fileObj.url({brokenIsFine: true});
            var au = Meteor.absoluteUrl();
            var au = au.replace(/\/$/, "");
            localStorage.setItem("fp", lspath);
            var ls = localStorage.getItem("fp");
            $(".getdiscoveredimagepath").val(ls);                                 
        });

        })

  },
// 	'click #sign-in-google': function(e, tmpl){
//     Meteor.loginWithGoogle({

//     }, function (err) {
//         if (err){
//             console.log("ERROR: " + err);//error handling
//         } else {
//             console.log("NO ERROR ON LOGIN");//show an alert
//         }
//     })
// },
'click #logout-button': function() {
    var dp = JSON.parse(decodeURIComponent("%7B%22meteorRelease%22%3A%22METEOR%401.3.2.4%22%2C%22ROOT_URL%22%3A%22http%3A%2F%2F192.168.43.160%3A3000%2F%22%2C%22ROOT_URL_PATH_PREFIX%22%3A%22%22%2C%22DDP_DEFAULT_CONNECTION_URL%22%3A%22http%3A%2F%2F192.168.43.160%3A3000%2F%22%2C%22autoupdateVersionCordova%22%3A%22159c75af94f7671a4545a6d3d2cee2087ac5f69a%22%2C%22appId%22%3A%22rxyfxb1wa6cvsz7huua%22%2C%22meteorEnv%22%3A%7B%22NODE_ENV%22%3A%22production%22%2C%22TEST_METADATA%22%3A%22%7B%7D%22%7D%7D"));

    console.log(dp);
    // Meteor.logout();
  }
});


/*****************************************************************************/
/* Ft: Helpers */
/*****************************************************************************/


Template.Ft.helpers({
    cdoc: function () {
    return Af.findOne({"userid":"3R2pKdT3x9PjWLsD8"});
    
  },
  discovery: function () {
    return Pc.findOne({"userid":"3R2pKdT3x9PjWLsD8"});
    
  }
});

/*****************************************************************************/
/* Ft: Lifecycle Hooks */
/*****************************************************************************/
Template.Ft.onCreated(function () {
});

Template.Ft.onRendered(function () {
});

Template.Ft.onDestroyed(function () {
});
Template.registerHelper('ex', function() {
    var selector = {
    userid: "3R2pKdT3x9PjWLsD8",
    };
         
    var this_exists = Af.find(selector, {limit: 1}).count() > 0;

   if(this_exists == true){
        return true;
    }
    else{
        return false;
    }
});

Template.registerHelper('pc', function() {
    var selector = {
    userid: "3R2pKdT3x9PjWLsD8",
    };
         
    var this_exists = Pc.find(selector, {limit: 1}).count() > 0;

   if(this_exists == true){
        return true;
    }
    else{
        return false;
    }
});
