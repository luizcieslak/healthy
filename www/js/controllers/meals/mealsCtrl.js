angular.module('app.controllers')
.controller('mealsCtrl', function($scope,$state,$ionicModal,$ionicPopup, usersRef, Auth, currentAuth, dayMeals, dayMealsWithTotal) {

  Auth.$onAuth(function(authData){
    if(!authData){
      $state.go('login');
    }
  });

    // var values = [{key: "a", value:10},{key: "b",value:20},{key: "c",value:30}];
    // var log = 0;
    // angular.forEach(values, function(key,value) {
    //   log+=key.value;
    //   console.log(key+" "+value);
    // });
    // console.log(log);

  $scope.date = new Date();

  //On load: load the meals associated with user.
  var userMeals = dayMealsWithTotal(currentAuth.uid, $scope.date);
  userMeals.$loaded().then(function(){
        $scope.userMeals = userMeals;
        $scope.total = userMeals.getTotal();
  })

  $scope.noMeals = "No meals registered for this date. Click on the plus sign below to add!";



  $ionicModal.fromTemplateUrl('templates/meals/modalCalendar.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goToDate = function(date){
    if(date){
      $scope.date = date;
      var userMeals = dayMeals(currentAuth.uid, date);
      userMeals.$loaded().then(function(){
        $scope.userMeals = userMeals;
        console.log($scope.userMeals);
      })
    }else{
      $ionicPopup.alert({
         title: 'Invalid date!',
         template: 'Please select a date',
         okType: 'button-dark'
       });
    }

  }

  $scope.addMeal = function (){
    $state.go('tabs.foodSelector');
  }

});
