angular.module('app.controllers')
.controller('bulkingCtrl', function($scope,$state,sharedInfo,PopupFactory) {
  $scope.data={
  };

  $scope.validate = function(form){
    console.log(form);
    if(form.$valid) {
      $scope.info = sharedInfo.getInfo();
      $scope.info.target = $scope.data.target;
      $scope.info.fatIntake = $scope.data.fatIntake;
      $scope.info.proteinIntake = $scope.data.proteinIntake;
      $scope.info.type = "healthy";
      $scope.info.cycling = false;


      sharedInfo.setInfo($scope.info);
      sharedInfo.doCalc();
      // $state.go('tabs.macroCycling');
      $state.go('tabs.overview');
    }
  }

  $scope.showPopup = function(){
    var myPopup = PopupFactory.getAlertPopup();
    myPopup.then(function(res){
      console.log("Help me alert activated.");
    });
  };

});
