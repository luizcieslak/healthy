angular.module('app.controllers')
.controller('macroCyclingCtrl', function($scope,$state,sharedInfo,PopupFactory) {
  $scope.data={
    notCycling:false,
  };

  $scope.validate = function(form){
    if(form.$valid) {
      $scope.info = sharedInfo.getInfo();
      $scope.info.cycling = $scope.data.cycling;
      $scope.info.trainDays = $scope.data.trainDays;
      $scope.info.diffCalorie = $scope.data.diffCalorie;
      $scope.info.diffFat = $scope.data.diffFat;
      $scope.info.notCycling = $scope.data.notCycling;
      $scope.info.isSet = true;
      //$scope.info ready to upload or do the calculations.
      sharedInfo.setInfo($scope.info);
      // console.log(sharedInfo.getInfo());

      sharedInfo.doCalc();
      $scope.info = sharedInfo.getInfo();
      if($scope.info.carbRestDays > 0 || $scope.info.notCycling){
        console.log($scope.info);
        $state.go('tabs.overview');
      }else{
        console.log($scope.info);
        $scope.negativeCarb = true;
      }


    }
  }

  $scope.showPopup = function(){
    var myPopup = PopupFactory.getAlertPopup();
    myPopup.then(function(res){
      console.log("Help me alert activated.");
    });
  };

});
