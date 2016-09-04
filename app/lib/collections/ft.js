myJobs = new JobCollection('myJobQueue');

Uploads = new FS.Collection('uploads',{
  stores: [new FS.Store.FileSystem('uploads',{path:'~/projectUploads'})]
});

Crowe = new Mongo.Collection('crowe');
Pp = new Mongo.Collection('pp');
Ft = new Mongo.Collection('ft');
Af = new Mongo.Collection('af');
Pc = new Mongo.Collection('pc');
Invites = new Mongo.Collection('invites');
Ja = new Mongo.Collection('ja');
Orders = new Mongo.Collection('orders');
Fruits = new Mongo.Collection('fruits');
Payments = new Mongo.Collection('payments');
Dl = new Mongo.Collection('dl');
Al = new Mongo.Collection('al');
Di = new Mongo.Collection('di');
Ti = new Mongo.Collection('ti');

Schema = {};

Schema.Pp = new SimpleSchema({

  imagename : {
  label: "Image Name",
    optional: false,
    type: String,
  autoform: {
    class:"imagename"
    }
    },
  userimagepath : {
  label: "Image Path",
    optional: false,
    type: String,
  autoform: {
    class:"imagepath"
    }
    },
  userimage: {
    type: String,
    label: "Image",
  optional: false,
    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "uploads"
      }
    }
  }
});

Pp.attachSchema(Schema.Pp);

Schema.Ti = new SimpleSchema({
  
    username : {
    label: "Username",
    optional: true,
    type: String,
    autoform: {
        class:""
    }
    },
    amount : {
    label: "Amount",
    optional: true,
    type: String,
    autoform: {
         class:""
    }
    },
    date : {
    optional: true,
    label:"Date",
    type: String,
    autoform: {
        class:""
    }
    },
    
    status: {
      label: "Status",
       optional: true,
   type: String,
    autoform: {
        class:""
    }
   },
   brokenvalues: {
   label: "Broken Values",
   type: String,
    autoform: {
        class:""
    }
   }
    
   });

Ti.attachSchema(Schema.Ti);

Schema.Invites = new SimpleSchema({
  
    userid : {
    label: "User id",
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    invitejobid : {
    label: "Discovery Type",
    optional: true,
    type: String,
    autoform: {
         class:""
    }
    },
    invitemessage : {
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    
   invitedate: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Invites.attachSchema(Schema.Invites);


Schema.Ja = new SimpleSchema({
  
    userid : {
    label: "User id",
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    jobid : {
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    jobcategory: {
    type: String,
    optional: false,
      autoform: {
     afFieldInput: {
      type: "textarea"
    }     
    }
    },
    jobapplicationdate: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Ja.attachSchema(Schema.Ja);


Schema.Fruits = new SimpleSchema({
  
    userid : {
    label: "User id",
    optional: true,
    type: String,
    autoform: {
        class:""
    }
    },
    orderdata : {
    label: "Order Data",
    optional: true,
    type: String,
    autoform: {
         class:""
    }
    },
    ordernames : {
    label: "Order Names",
    optional: true,
    type: String,
    autoform: {
         class:""
    }
    },
    ordernumber : {
    label: "Order Data",
    optional: true,
    type: String,
    autoform: {
         class:""
    }
    },
    orderarea : {
    label: "Order Area",
    optional: true,
    type: String,
    autoform: {
         class:""
    }
    },
     orderstatus : {
    label: "Order Status",
    optional: true,
    type: String,
    autoform: {
         class:""
    }
    },
    orderdate: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Fruits.attachSchema(Schema.Fruits);


Schema.Payments = new SimpleSchema({
  
    userid : {
    label: "User id",
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    premiumtype : {
    label: "Discovery Type",
    optional: true,
    allowedValues: ['Mpesa','Paypal','Other'],
    type: String,
    autoform: {
         class:""
    }
    },
    paymentamount : {
    label: "Introduction Title",
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    paymentnumber: {
    type: String,
    optional: false,
    },
    paymentemail: {
    type: String,
    optional: false,
    },
    paymentdate: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Payments.attachSchema(Schema.Payments);



Schema.Dl = new SimpleSchema({
  
    userid : {
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    discoveryid : {
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    discoveryvote : {
    optional: false,
    type: Number,
    autoform: {
         class:""
    }
    },
    likedate: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Dl.attachSchema(Schema.Dl);



Schema.Al = new SimpleSchema({
  
    userid : {
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    applikevote : {
    optional: false,
    type: Number,
    autoform: {
        class:""
    }
    },
    applikedate: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Al.attachSchema(Schema.Al);




Schema.Di = new SimpleSchema({
  
    userid : {
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    employerid : {
    optional: false,
    type: String,
    autoform: {
         class:""
    }
    },
    invitedate: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Di.attachSchema(Schema.Di);

Schema.Pc = new SimpleSchema({
  
    userid: {
   type: String,
   optional: true,
   autoValue: function() {
            return '3R2pKdT3x9PjWLsD8';
        }
   },
    premiumtype : {
    label: "Discovery Type",
    optional: true,
    allowedValues: ['JobSeeker','Business'],
    type: String,
    autoform: {
         class:""
    }
    },
    introduction : {
    label: "Introduction Title",
    optional: true,
    type: String,
    autoform: {
        class:""
    }
    },
    description: {
    type: String,
    label: "Description",
    optional: true,
      autoform: {
     afFieldInput: {
      type: "textarea"
    }     
    }
    },
    dateposted: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
    
   });

Pc.attachSchema(Schema.Pc);


Schema.Ft = new SimpleSchema({
  
    jobtitle : {
    label: "Job Title",
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    employerid : {
    optional: false,
    type: String,
    autoform: {
        class:""
    }
    },
    telephonenumber : {
    label: "Telephone Number",
    optional: false,
    type: String,
    autoform: {
         class:""
    }
    },
    educationlevel : {
    label: "Education Level",
    optional: false,
    type: String,
    allowedValues: ['Phd','Masters','Bachelor Degree','Diploma','High School','Others'],
    autoform: {
        class:""
    }
    },
    jobcategory : {
    label: "Job Category",
    optional: false,
    type: String,
    allowedValues: ['Restaurant','Events','Grooming','Marketing','Industrial','Retail','Manual Work','Driving','Office','Graduates','Highly Experienced','Specialized Skills','Anonymous Tasks'],
    autoform: {
      class:""
    }
    },
    jobdescription : {
    label: "Job Description",
    optional: false,
    type: String,
    autoform: {
     afFieldInput: {
      type: "textarea"
    }     
    }
    },
    numberofvacancies: {
    type: Number,
    label: "Number Of Vacancies",
    optional: false,
      autoform: {
      class:""
    }
  },
  dateofexpiry: {
    type: Date,
    label: "Date Of Expiry",
    optional: false,
      autoform: {
      class:""
    }
  },
  priority: {
    type: String,
    label: "Priority",
    optional: false,
    allowedValues: ['High Priority','Normal Priority'],
      autoform: {
      class:""
    }
  },
  invitemessage: {
    type: String,
    label: "Invite Message",
    optional: false,
      autoform: {
     afFieldInput: {
      type: "textarea"
    }     
    }
  },
  latitude: {
    type: String,
    label: "Latitude",
    optional: true,
      autoform: {
      class:""
    }
  },
  longitude: {
    type: String,
    label: "Longitude",
    optional: true,
      autoform: {
      class:""
    }
  },
  country: {
    type: String,
    label: "Country",
    optional: true,
      autoform: {
      class:""
    }
  },
  city: {
    type: String,
    label: "City",
    optional: true,
      autoform: {
      class:""
    }
  },
  region: {
    type: String,
    label: "Region",
    optional: true,
      autoform: {
      class:""
    }
  },
  timezone: {
    type: String,
    label: "Timezone",
    optional: true,
      autoform: {
      class:""
    }
  },
  ipaddress: {
    type: String,
    label: "Ip Address",
    optional: true,
      autoform: {
      class:""
    }
  },
  dateposted: {
   type: Date,
   optional: true,
   autoValue: function() {
            return new Date();
        }
   }
   });

Ft.attachSchema(Schema.Ft);

Schema.Af = new SimpleSchema({
  userid: {
   type: String,
   optional: true,
   autoValue: function() {
            return '3R2pKdT3x9PjWLsD8';
        }
   },
mobilemoneytelephonenumber: {
   type: String,
   label:"Mobile Money Number",
   optional: true
   },
 paypalemailaddress: {
   type: String,
   label:"Paypal Email Address",
   optional: true
   },
   accounttype: {
   type: String,
   label:"Account Type",
   optional: true,
   allowedValues: ['Business','JobSeeker','Employer'],
   },
   paywallstatus: {
   type: String,
   label:"Paywall Status",
   optional: true,
   allowedValues: ['jobseeker_valid','jobseeker_invalid','employer_valid','employer_invalid','business_valid','business_invalid']
   },
   payment_start_of_validity: {
   type: Date,
   optional: true
   },
   payment_end_of_validity: {
   type: Date,
   optional: true
   }
});
Af.attachSchema(Schema.Af);

if (Meteor.isServer) {
  myJobs.allow({
  jobSave:function(userId,project){
    return true;
  },
  getWork:function(userId,project){
    return true;
  },
  update:function(userId,project,fields,modifier){
   return true;
  },
  remove:function(userId,project){
    return true;
  }
});

Crowe.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
  
  Ft.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });


  Fruits.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });


  Uploads.allow({
  insert:function(userId,project){
    return true;
  },
  update:function(userId,project,fields,modifier){
   return true;
  },
  remove:function(userId,project){
    return true;
  },
  download:function(){
    return true;
  }
});

}
