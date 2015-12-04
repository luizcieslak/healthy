angular.module('app.controllers', [])

//Login under construction
.controller('loginCtrl', function($scope) {
  $scope.user={
    username:'',
    password:'' //don't store like this.
  };

  $scope.signIn = function(user) {
    console.log('login', user);
    $state.go('tabsController.informations');
  };

})

.controller('informationsCtrl', function($scope,$translate,$state,$ionicPopup,sharedInfo) {

  $scope.data={
    gender:'',
    objective:'',
    isCutting:true,
    activity:''
  };

  $scope.isWoman = function(){
    return $scope.data.gender === 'Woman';
  }

  $scope.validate = function(form){
    console.log(form);
    if(form.$valid) {
      if($scope.data.objective == "Cutting"){
        $scope.data.isCutting=true;
        sharedInfo.setInfo($scope.data);
        $state.go('tabsController.cutting');
      }else{
        $scope.data.isCutting=false;
        sharedInfo.setInfo($scope.data);
        $state.go('tabsController.bulking');

      }
    }
  }
})

.controller('mealsCtrl', function($scope) {

})

.controller('trackingCtrl', function($scope) {
  // chart example
  // $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  //   $scope.series = ['Series A', 'Series B'];
  //   $scope.data = [
  //     [65, 59, 80, 81, 56, 55, 40],
  //     [28, 48, 40, 19, 86, 27, 90]
  //   ];
  //   $scope.onClick = function (points, evt) {
  //     console.log(points, evt);
  //   };
})

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
      sharedInfo.setInfo($scope.info);
      console.log(sharedInfo.getInfo());
      $state.go('tabsController.macroCycling');
    }
  }

  $scope.showPopup = function(){
    var myPopup = PopupFactory.getPopup();
    myPopup.then(function(res){
      console.log("Help me alert activated.");
    });
  };

})

.controller('cuttingCtrl', function($scope,$state,sharedInfo,PopupFactory) {
  $scope.data={
  };

  $scope.validate = function(form){
    console.log(form);
    if(form.$valid) {
      $scope.info = sharedInfo.getInfo();
      $scope.info.target = $scope.data.target;
      $scope.info.fatIntake = $scope.data.fatIntake;
      $scope.info.proteinIntake = $scope.data.proteinIntake;
      //$scope.info ready to upload or do the calculations.
      sharedInfo.setInfo($scope.info);
      // console.log(sharedInfo.getInfo());
      $state.go('tabsController.macroCycling');
    }
  }

  $scope.showPopup = function(){
    var myPopup = PopupFactory.getPopup();
    myPopup.then(function(res){
      console.log("Help me alert activated.");
    });
  };

})

.controller('macroCyclingCtrl', function($scope,$state,sharedInfo,PopupFactory) {
  $scope.data={
    notCycling:false,
  };

  $scope.validate = function(form){
    console.log(form);
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

      sharedInfo.doCalc;
      $scope.info = sharedInfo.getInfo();
      if($scope.info.carbRestDays > 0){
        $state.go('tabsController.calc');
      }else{
        console.log($scope.info);
        $scope.negativeCarb = true;
      }


    }
  }

  $scope.showPopup = function(){
    var myPopup = PopupFactory.getPopup();
    myPopup.then(function(res){
      console.log("Help me alert activated.");
    });
  };

})

.controller('calcCtrl', function($scope,$state,sharedInfo) {

  if(!sharedInfo.getInfo().isSet){
    $state.go('tabsController.informations');
  }

  $scope.editInfo = function(){
    $state.go('tabsController.informations');
  }

  //sharedInfo.doCalc();
  $scope.info = sharedInfo.getInfo();

})

.controller('underConstructionCtrl', function($scope) {
  // var deploy = new Ionic.Deploy();
  //
  // // Update app code with new release from Ionic Deploy
  // $scope.doUpdate = function() {
  //   deploy.update().then(function(res) {
  //     console.log('Ionic Deploy: Update Success! ', res);
  //   }, function(err) {
  //     console.log('Ionic Deploy: Update error! ', err);
  //   }, function(prog) {
  //     console.log('Ionic Deploy: Progress... ', prog);
  //   });
  // };
  //
  // // Check Ionic Deploy for new code
  // $scope.checkForUpdates = function() {
  //   console.log('Ionic Deploy: Checking for updates');
  //   deploy.check().then(function(hasUpdate) {
  //     console.log('Ionic Deploy: Update available: ' + hasUpdate);
  //     $scope.hasUpdate = hasUpdate;
  //   }, function(err) {
  //     console.error('Ionic Deploy: Unable to check for updates', err);
  //   });
  // }
})

.controller('mealsListCtrl', function($scope) {

})

.controller('foodListCtrl', function($scope) {

})

.controller('tracking2Ctrl', function($scope) {
})

.controller('foodInputCtrl', function($scope) {
  $scope.data={
    name:''
  };

  $scope.send = function(data,$ionicPopup){
  }
});
