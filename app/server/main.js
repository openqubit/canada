import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
Markers._ensureIndex({createdAt: 1}, {expireAfterSeconds: 60});
  // SSLProxy({
  //     port: 6000, //or 443 (normal port/requires sudo)
  //     ssl : {
  //           key: Assets.getText("apache.key"),
  //           cert: Assets.getText("apache.crt"),

  //           //Optional CA
  //           //Assets.getText("ca.pem")
  //     }
  //   });
  // code to run on server at startup
  // first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "facebook"
});
Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: "1369489926397936",
  secret: "46de773cd67bc126265a82c92486b99b"
});

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "twitter"
});
Accounts.loginServiceConfiguration.insert({
  service: "twitter",
  consumerKey: "IYg2CZyDusOuxz3OUr6c3Ag0Y",
  secret: "euWmLsgkf6czv9ih8mK50EHUlO5S8NbekDayd0dON2kY24RElC"
});

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "google"
});
Accounts.loginServiceConfiguration.insert({
  service: "google",
  clientId: "291832390597-iblfe4fqvmcl1qbsfttj7m04093848h1.apps.googleusercontent.com",
  secret: "gDZUPq6XfLMC-RqjkbOT1jov"
});
});
