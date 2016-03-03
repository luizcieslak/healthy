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
  'firebase',
  'validation.match'
  ])

.run(function($ionicPlatform, $ionicAnalytics, $rootScope, $state) {

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

  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireAuth promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $state.go("login");
      }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
}]);
