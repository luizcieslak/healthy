angular.module('app.controllers')
.controller('cuttingCtrl', function($scope,$state,sharedInfo,PopupFactory,User) {
  //info for fast testing
  $scope.data={
    target:0.5,
    fatIntake:1,
    proteinIntake:2.5,
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

      //$scope.info ready to upload and do the calculations.
      sharedInfo.setInfo($scope.info);
      sharedInfo.doCalc();

      //save the data
      $scope.info = sharedInfo.getInfo();
      var user = User($scope.authData.uid);
      user.info = $scope.info;
      user.$save().then(function(){
        alert('Your plan was saved with success!');
      }).catch(function(error){
        alert('Error: '+error);
      })

      $state.go('tabs.overview');
      // $state.go('tabs.macroCycling');
    }
  }

  $scope.showPopup = function(){
    var myPopup = PopupFactory.getAlertPopup();
    myPopup.then(function(res){
      console.log("Help me alert activated.");
    });
  };

});
