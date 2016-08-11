/*****************************************************************************/
/* Tinder: Event Handlers */
/*****************************************************************************/
Template.Tinder.events({
    'change .pp': function(event, template) {
    FS.Utility.eachFile(event,function(file){

        var fileObj=new FS.File(file);

        Uploads.insert(fileObj,function(err){
            
            var lspath = fileObj.url({brokenIsFine: true});
            var au = Meteor.absoluteUrl();
            var au = au.replace(/\/$/, "");
            localStorage.setItem("one", lspath);
            var ls = localStorage.getItem("one");
            var fullpath = au+ls;
            $(".imagepath").val(fullpath);                                                                  
        });

        })
  }
});

/*****************************************************************************/
/* Tinder: Helpers */
/*****************************************************************************/
Template.Tinder.helpers({
		settings: function () {
        return {
		collection: 'tindersettings',
        rowsPerPage: 5,
        showFilter: true,
        showNavigation: 'auto',
        fields: [
            { key: '_id', label: 'Id' },
            { key: 'username', label: 'Username' },
            { key: 'amount', label: 'Amount' },
			{ key: 'date', label: 'Date' },
			{ key: 'status', label: 'Status' },
			{ key: 'brokenvalues', label: 'Broken Values' },
            { key: 'edit', label: 'Textbox', fn: function () { return new Spacebars.SafeString('<input type="text" />') } },
            { key: 'break', label: 'Break', fn: function () { return new Spacebars.SafeString('<a href="#" class="button button-fill color-red button-round">Red Button</a') } }
        ],
        useFontAwesome: true,
        group: 'client'
    };
    }
});

/*****************************************************************************/
/* Tinder: Lifecycle Hooks */
/*****************************************************************************/
Template.Tinder.onCreated(function () {
});

Template.Tinder.onRendered(function () {
});

Template.Tinder.onDestroyed(function () {
});