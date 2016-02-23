angular.module('app.controllers')
.controller('overviewCtrl', function($scope,$state,sharedInfo) {
  //sharedInfo.doCalc();
  $scope.info = sharedInfo.getInfo();

  $scope.beginConfig = function(){
    $state.go('tabs.info');
  }

  $scope.editInfo = function(){
    //retrieve information
    $state.go('tabs.info');
  }

});
