Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

// Router.route('/(.*)', {
//    name: 'github',
//   controller: 'FtController',
//   action: 'github',
//   where: 'client'
// });

// Router.route('/', function () {
//   this.render('Main');
// });

Router.route('/Ft/github', {
  name: 'github',
  controller: 'FtController',
  action: 'github',
  where: 'client'
});

Router.route('/Ft/tinder', {
  name: 'tinder',
  controller: 'FtController',
  action: 'tinder',
  where: 'client'
});