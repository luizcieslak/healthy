angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('sharedInfo', [function(){

  var info={
    gender:'',
    objective:'',
    weight:0,
    height:0,
    waist:0,
    neck:0,
    activity:'',
    target:0,
    fatIntake:0,
    proteinIntake:0
  };

  return{
    getInfo: function(){
      return info;
    },
    setInfo: function(data){
      info=data;
    }
  };
}]);
