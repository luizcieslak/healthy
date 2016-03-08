angular.module('app.controllers')
.controller('macroCyclingCtrl', function($scope,$state,sharedInfo,PopupFactory, Auth, Users) {

  Auth.$onAuth(function(authData){
    $scope.authData = authData;
    console.log(authData);
  });

  //info for fast testing
  $scope.data={
    cycling:true,
    trainDays:4,
    diffCalorie:20,
    diffFat:20
  };

  $scope.validate = function(form){
    if(form.$valid) {
      $scope.info = sharedInfo.getInfo();
      $scope.info.cycling = $scope.data.cycling;
      $scope.info.trainDays = $scope.data.trainDays;
      $scope.info.diffCalorie = $scope.data.diffCalorie;
      $scope.info.diffFat = $scope.data.diffFat;
      $scope.info.type = "healthy";
      //$scope.info ready to upload or do the calculations.
      sharedInfo.setInfo($scope.info);
      // console.log(sharedInfo.getInfo());

      sharedInfo.doCalc();
      $scope.info = sharedInfo.getInfo();
      if($scope.info.carbRestDays > 0 && $scope.info.cycling){
        //save the data
        var user = Users($scope.authData.uid);
        user.info = $scope.info;
        user.$save().then(function(){
          alert('Your plan was saved with success!');
        }).catch(function(error){
          alert('Error: '+error);
        })

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
