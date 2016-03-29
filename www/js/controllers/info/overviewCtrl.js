angular.module('app.controllers')
.controller('overviewCtrl', function($scope,$state,$ionicModal,sharedInfo, Auth, User, currentAuth, $window) {
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

  var user = User(currentAuth.uid);
  user.$loaded().then(function(){
    console.log(user);
    if(user.$value === null){
      console.log("plan not set");
    }else{
      $scope.info = user.info;
      $scope.hasAPlan = true;
    }
  });

  $ionicModal.fromTemplateUrl('templates/info/modalPreSetPlan.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
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
    var user = User(currentAuth.uid);
    user.info = preSetPlan;
    user.$save().then(function(){
      alert('Your plan was saved with success!');
      $scope.modal.hide();
      $window.location.reload(true);
    }).catch(function(error){
      alert('Error: '+error);
    })
  }
});
