angular.module('app.controllers')
.controller('newFoodCtrl', function($scope,$state,$ionicPopup, Foods, $firebaseArray) {
  var foodsRef = new Firebase("https://popping-torch-1733.firebaseio.com/foods");

  $scope.send = function(form,food){

    if(form.$valid){

      var foods = $firebaseArray(foodsRef);
      var query = foodsRef.orderByChild("name").equalTo(food.name);
      var foodquery = $firebaseArray(query);

      foods.$loaded().then(function(){

        console.log(foods);
        console.log(foodquery);
        console.log(foodquery[0]);
        if(!foodquery[0]){
          foods.$add(food).then(function(){
            alert('Thank you! Your submission is under review and should be ready after 24 hours. Don\`t forget to record it tomorrow!');
          }).catch(function(error){
            alert('Error: '+error);
          })
        }else{
          alert('A meal with the name '+food.name+' already exists.');
        }
      });

    }
  };

});
