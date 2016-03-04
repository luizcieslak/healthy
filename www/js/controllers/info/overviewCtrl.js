angular.module('app.controllers')
.controller('overviewCtrl', function($scope,$state,$ionicModal,sharedInfo, Auth, Users, currentAuth) {
  $scope.hasAPlan=false;

  $scope.logout = function(){
    Auth.$unauth();
  }

  console.log(currentAuth);

  Auth.$onAuth(function(authData){
    if(!authData){
      $state.go('login');
    }
  });

  var user = Users(currentAuth.uid);
  user.$loaded().then(function(){
    if(user.$value === null){
      console.log("plan not set");
    }else{
      console.log(user.info);
      $scope.info = user.info;
      $scope.hasAPlan = true;
    }
  });

  $ionicModal.fromTemplateUrl('templates/info/modalPreSetPlan.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    console.log("modal created");
  });

  $scope.beginConfig = function(){
    $state.go('tabs.info');
  }

  $scope.editInfo = function(){
    //retrieve information from server
    $state.go('tabs.info');
  }

  $scope.preSetPlan = {};
  $scope.savePreSetPlan = function(form,preSetPlan){
    if(!preSetPlan.cycling){
      preSetPlan.cycling = false;
    }
    preSetPlan.type = "preset";

    //save the data
    var user = Users(currentAuth.uid);
    user.info = preSetPlan;
    user.$save().then(function(){
      alert('Your plan was saved with success!');
    }).catch(function(error){
      alert('Error: '+error);
    })
  }
});
