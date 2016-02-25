// angular.module is a global place for creating, registering and retrieving Angular modules
// the 2nd parameter is an array of 'requires'
angular.module('app',
  ['ionic',
  'ui.bootstrap.datetimepicker',
  'ionic.service.analytics',
  'ngMessages',
  'app.translate',
  'app.controllers',
  'app.routes',
  'app.services',
  'app.directives',
  ])

.run(function($ionicPlatform, $ionicAnalytics) {

  $ionicPlatform.ready(function() {
    //$ionicAnalytics.register();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
}]);
