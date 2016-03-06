angular.module('app.controllers')
.controller('foodSelectorCtrl', function($scope,$state,$ionicPopup, Foods, $firebaseArray) {

  $scope.newFood = function(){
    $state.go('tabs.newFood');
  }

  var foodsRef = new Firebase("https://popping-torch-1733.firebaseio.com/foods");

  $scope.foods = $firebaseArray(foodsRef);
  var query = foodsRef.orderByChild("name").equalTo("banasadxna");

  $scope.foodquery = $firebaseArray(query);

  $scope.foodquery.$loaded().then(function(){
    console.log($scope.foods[1]);
    console.log($scope.foodquery[0]);
  });

  $scope.addFood = function (food){
    console.log(food);
  }
});
