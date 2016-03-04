angular.module('app.controllers')
.controller('infoCtrl', function($scope,$translate,$state,sharedInfo) {

  // $scope.data={
  //   gender:'',
  //   objective:'',
  //   isCutting:true,
  //   activity:''
  // };

  //info for fast testing
  $scope.data={
    gender:'Man',
    objective:'Cutting',
    weight:78,
    height:189 ,
    waist:89,
    neck:40,
    activity:'Sedentary',
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
        $state.go('tabs.cutting');
      }else{
        $scope.data.isCutting=false;
        sharedInfo.setInfo($scope.data);
        $state.go('tabs.bulking');

      }
    }
  }

});
