angular.module('app.controllers')
.controller('newFoodCtrl', function($scope,$state,$ionicPopup) {

  $scope.data={};

  //Firebase reference example
  var myDataRef = new Firebase('https://popping-torch-1733.firebaseio.com/');

  $scope.send = function(form,food){
    if(form.$valid){
      var foodRef = myDataRef.child("foods");

      var obj = {};
      var foodname = food.name;
      delete food.name;
      obj[foodname]=food;

      foodRef.child(foodname).set(obj);
    }
  };

});
