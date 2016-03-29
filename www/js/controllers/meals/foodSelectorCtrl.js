angular.module('app.controllers')
.controller('foodSelectorCtrl', function($scope,$state,$ionicModal, currentAuth, Auth, $firebaseArray, foodsRef, dayMeals, searchFood) {

  Auth.$onAuth(function(authData){
    if(!authData){
      $state.go('login');
    }
  });

  $scope.searchString = '';
  $scope.foodQuery = {};

  $ionicModal.fromTemplateUrl('templates/meals/modalNewMeal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.newFood = function(){
    $state.go('tabs.newFood');
  }

  $scope.foods = $firebaseArray(foodsRef.limitToFirst(5));

  $scope.search = function(){
    $scope.matches = searchFood($scope.searchString);
  };

  $scope.cancel = function(){
    $state.go('tabs.meals');
  }

  $scope.addMeal = function(food){
    $scope.foodSelected = food;
    $scope.modal.show();
  }

  $scope.saveMeal = function(form){
    if(form.$valid){
      //multiply quantity chosen with food attributes
      var food = {};
      food.calories = $scope.foodSelected.calories * $scope.foodSelected.quantityChosen;
      food.carb = $scope.foodSelected.carb * $scope.foodSelected.quantityChosen;
      food.protein = $scope.foodSelected.protein * $scope.foodSelected.quantityChosen;
      food.fat = $scope.foodSelected.fat * $scope.foodSelected.quantityChosen;

      $scope.date = new Date();

      var meals = dayMeals(currentAuth.uid,$scope.date);
      meals.$add(food).then(function(){
        alert('Meal added!');
        $scope.modal.hide();
      }).catch(function(error){
        alert('Error: '+error);
      });
    }
  }
});
