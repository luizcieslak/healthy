angular.module('app.controllers')
.controller('mealsCtrl', function($scope,$state,$ionicModal,$ionicPopup) {

  $ionicModal.fromTemplateUrl('templates/meals/modalCalendar.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    console.log(modal);
  });

  $scope.goToDate = function(date){
    if(date){
      console.log(date.getDate());
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
