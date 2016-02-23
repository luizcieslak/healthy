angular.module('app.controllers')
.controller('mealsCtrl', function($scope,$state,$ionicModal,$ionicPopup) {

  // $scope.showCal = function(){
  //   var datepickerPopup = $ionicPopup.show({
  //      template: '<datetimepicker data-ng-model="data.embeddedDate"/>',
  //      title: "Select a date",
  //      scope: $scope,
  //      buttons: [
  //        { text: 'Cancel' },
  //        {
  //          text: '<b>Go</b>',
  //          type: 'button-positive',
  //          onTap: function(e) {
  //            console.log($scope.data.embeddedDate);
  //            //open Meals in selected data
  //          }
  //        }
  //      ]
  //     });
  // };

  $ionicModal.fromTemplateUrl('templates/meals/modalCalendar.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    console.log(modal);
  });

  $scope.goToDate = function(date){
    if(date){
      console.log(date);
    }else{
      $ionicPopup.alert({
         title: 'Invalid date!',
         template: 'Please select a date',
         okType: 'button-dark'
       });
    }

  }

});
