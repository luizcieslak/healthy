angular.module('app.controllers')
.controller('newFoodCtrl', function($scope,$state,$ionicPopup,Foods) {

  food={};

  $scope.send = function(form,food){
    if(form.$valid){
      var foodname = food.name;
      var foods = Foods(foodname);

      foods.$loaded().then(function(){
        if(foods.$value === null){
          foods.info = food;
          foods.$save().then(function(){
            alert('Thank you! Your submission is under review and should be ready after 24 hours. Don\`t forget to record it tomorrow!');
          }).catch(function(error){
            alert('Error: '+error);
          })
        }else{
          alert(foodname+' already exists.');
        }
      });

    }
  };

});
