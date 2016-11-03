/* global FlowRouter */
/* global BlazeLayout */

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('brain'); // Will be go to storms
    }
    BlazeLayout.render('LandingLayout');
  }
});

FlowRouter.route('/brain', {
  name: 'brain',
  action() {
    BlazeLayout.render('StormLayout', {storm: 'Brain'});
  }
});

if (Meteor.isClient) {
  Accounts.onLogin(function () {
    FlowRouter.go('brain'); // Will be go to storms
  });
  
  Accounts.onLogout(function () {
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function (context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);