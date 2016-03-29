angular.module('app.controllers')
.controller('mealsCtrl', function($scope,$state,$ionicModal,$ionicPopup, usersRef, Auth, currentAuth, dayMealsWithTotal) {

  Auth.$onAuth(function(authData){
    if(!authData){
      $state.go('login');
    }
  });

  //On load: load the meals associated with user on the selected date. Default date: today
  $scope.start = function(date){
    if(date){
      $scope.date = date;
      var userMeals = dayMealsWithTotal(currentAuth.uid, date);
      userMeals.$loaded().then(function(){
        $scope.userMeals = userMeals;
        $scope.total = userMeals.getTotal();
      })
    }else{
      $ionicPopup.alert({
         title: 'Invalid date!',
         template: 'Please select a date',
         okType: 'button-dark'
       });
    }
  }

  $scope.date = new Date();
  $scope.start($scope.date);

  $scope.noMeals = "No meals registered for this date. Click on the plus sign below to add!";


  $ionicModal.fromTemplateUrl('templates/meals/modalCalendar.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.addMeal = function (){
    $state.go('tabs.foodSelector');
  }

  $scope.remove = function(meal){
    console.log($scope.userMeals);
    $scope.userMeals.$remove(meal).then(function() {
      $scope.total = userMeals.getTotal();
    }, function(error) {
      console.error("Error:", error);
    });
  }

});
