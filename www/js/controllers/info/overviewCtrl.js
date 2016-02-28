angular.module('app.controllers')
.controller('overviewCtrl', function($scope,$state,$ionicModal,sharedInfo) {

  $ionicModal.fromTemplateUrl('templates/info/modalPreSetPlan.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    console.log("modal created");
  });

  $scope.info = sharedInfo.getInfo();

  $scope.beginConfig = function(){
    $state.go('tabs.info');
  }

  $scope.editInfo = function(){
    //retrieve information from server
    $state.go('tabs.info');
  }

  $scope.preSetPlan = {};
  $scope.savePreSetPlan = function(form,preSetPlan){
    console.log(form);
    console.log(preSetPlan);
  }
});
