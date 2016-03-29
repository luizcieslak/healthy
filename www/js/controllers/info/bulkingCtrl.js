angular.module('app.controllers')
.controller('bulkingCtrl', function($scope,$state,sharedInfo,PopupFactory, User) {
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
