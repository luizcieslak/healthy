angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  /*
  UI Router: https://github.com/angular-ui/ui-router
  Routes for templates.
  */

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })


    .state('tabsController.informations', {
      url: '/info',
      views: {
        'tab1': {
          templateUrl: 'templates/informations.html',
          controller: 'informationsCtrl'
        }
      }
    })

    .state('tabsController.bulking', {
      url: '/bulking',
      views: {
        'tab1': {
          templateUrl: 'templates/bulking.html',
          controller: 'bulkingCtrl'
        }
      }
    })

    .state('tabsController.cutting', {
      url: '/cutting',
      views: {
        'tab1': {
          templateUrl: 'templates/cutting.html',
          controller: 'cuttingCtrl'
        }
      }
    })

    .state('tabsController.macroCycling', {
      url: '/cycling',
      views: {
        'tab1': {
          templateUrl: 'templates/macroCycling.html',
          controller: 'macroCyclingCtrl'
        }
      }
    })

    .state('tabsController.calc', {
      url: '/calc',
      views: {
        'tab1': {
          templateUrl: 'templates/calc.html',
          controller: 'calcCtrl'
        }
      }
    })



    .state('tabsController.foods', {
      url: '/foods',
      views: {
        'tab2': {
          templateUrl: 'templates/foods.html',
          controller: 'underConstructionCtrl'
        }
      }
    })

    .state('tabsController.meals', {
      url: '/meals',
      views: {
        'tab2': {
          templateUrl: 'templates/meals.html',
          controller: 'mealsCtrl'
        }
      }
    })

    .state('tabsController.foodinput', {
      url: '/foodinput',
      views: {
        'tab2': {
          templateUrl: 'templates/foodinput.html',
          controller: 'foodInputCtrl'
        }
      }
    })


    .state('tabsController.tracking', {
      url: '/tracking',
      views: {
        'tab3': {
          templateUrl: 'templates/tracking.html',
          controller: 'underConstructionCtrl'
        }
      }
    })


    .state('tabsController.mealsList', {
      url: '/meals',
      views: {
        'tab2': {
          templateUrl: 'templates/mealsList.html',
          controller: 'mealsListCtrl'
        }
      }
    })





    .state('tabsController.foodList', {
      url: '/foodlist',
      views: {
        'tab2': {
          templateUrl: 'templates/foodList.html',
          controller: 'foodListCtrl'
        }
      }
    })



    .state('tracking2', {
      url: '/tracking',
      templateUrl: 'templates/tracking2.html',
      controller: 'tracking2Ctrl'
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/info');

});
