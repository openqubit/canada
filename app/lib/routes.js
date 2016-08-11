Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

// Router.route('/', {
//   name: 'home',
//   controller: 'FtController',
//   action: 'github',
//   where: 'client'
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