angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  /*
  UI Router: https://github.com/angular-ui/ui-router
  Routes for templates.
  */

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login/login.html',
      controller: 'loginCtrl'
    })

    .state('tabs', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabs.html',
    })

    .state('tabs.info', {
      url: '/info',
      views: {
        'info-tab': {
          templateUrl: 'templates/info/info.html',
          controller: 'infoCtrl'
        }
      }
    })

    .state('tabs.bulking', {
      url: '/bulking',
      views: {
        'info-tab': {
          templateUrl: 'templates/info/bulking.html',
          controller: 'bulkingCtrl'
        }
      }
    })

    .state('tabs.cutting', {
      url: '/cutting',
      views: {
        'info-tab': {
          templateUrl: 'templates/info/cutting.html',
          controller: 'cuttingCtrl'
        }
      }
    })

    .state('tabs.macroCycling', {
      url: '/cycling',
      views: {
        'info-tab': {
          templateUrl: 'templates/info/macroCycling.html',
          controller: 'macroCyclingCtrl'
        }
      }
    })

    .state('tabs.overview', {
      url: '/overview',
      views: {
        'info-tab': {
          templateUrl: 'templates/info/overview.html',
          controller: 'overviewCtrl'
        }
      }
    })

    .state('tabs.meals', {
      url: '/meals',
      views: {
        'meals-tab': {
          templateUrl: 'templates/meals/meals.html',
          controller: 'mealsCtrl'
        }
      }
    })

    .state('tabs.foodSelector', {
      url: '/foodSelector',
      views: {
        'meals-tab': {
          templateUrl: 'templates/meals/foodSelector.html',
          controller: 'foodSelectorCtrl'
        }
      }
    })

    .state('tabs.newFood', {
      url: '/newFood',
      views: {
        'meals-tab': {
          templateUrl: 'templates/meals/newFood.html',
          controller: 'newFoodCtrl'
        }
      }
    })


    .state('tabs.tracking', {
      url: '/tracking',
      views: {
        'tracking-tab': {
          templateUrl: 'templates/tracking/tracking.html',
          controller: 'trackingCtrl'
        }
      }
    })


    .state('tabs.trackingInput', {
      url: '/trackingInput',
      views: {
        'tracking-tab': {
          templateUrl: 'templates/tracking/trackingInput.html',
          controller: 'trackingInputCtrl'
        }
      }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
