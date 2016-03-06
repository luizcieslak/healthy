angular.module('app.controllers')
.controller('foodSelectorCtrl', function($scope,$state,$ionicModal, $firebaseArray, currentAuth, Auth, Users) {

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

  var foodsRef = new Firebase("https://popping-torch-1733.firebaseio.com/foods");
  $scope.foods = $firebaseArray(foodsRef.limitToFirst(5));


  $scope.search = function(){
    var query = foodsRef.orderByChild("name").startAt($scope.searchString).endAt($scope.searchString + '\uf8ff');
    $scope.matches = $firebaseArray(query);
  };

  $scope.addMeal = function(food){
    $scope.foodSelected = food;
    $scope.modal.show();
  }

  Auth.$onAuth(function(authData){
    if(!authData){
      $state.go('login');
    }
  });

  $scope.saveMeal = function(form){
    if(form.$valid){
      //multiply quantity chosen with food attributes
      $scope.foodSelected.calories *= $scope.foodSelected.quantityChosen;
      $scope.foodSelected.carb *= $scope.foodSelected.quantityChosen;
      $scope.foodSelected.protein *= $scope.foodSelected.quantityChosen;
      $scope.foodSelected.fat *= $scope.foodSelected.quantityChosen;

      d = new Date();
      console.log($scope.foodSelected);
      var userRef = new Firebase("https://popping-torch-1733.firebaseio.com/users");
      var mealRef = userRef.child(currentAuth.uid).child("meals").child(d.getFullYear()).child(d.getMonth()).child(d.getDate());
      var meal = $firebaseArray(mealRef);
      meal.$add($scope.foodSelected).then(function(){
        alert('Meal added!');
        $scope.modal.hide();
      }).catch(function(error){
        alert('Error: '+error);
      })
    }
  }
});
