angular.module('app.services', [])


//Service that provides the helpAlert for the templates.
.factory('PopupFactory', function($ionicPopup){
  function getPopup() {
    return $ionicPopup.alert({
      templateUrl: 'templates/helpAlert.html',
      title: 'Help me!'
    })
  };

  return{
    getPopup: getPopup
  };
})

//Service that stores the user info in one place.
.factory('sharedInfo', [function(){

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
    proteinIntake:0,
    isSet: false
  };
  // 
  // var info={
  //   gender:'Man',
  //   objective:'Cutting',
  //   weight:78,
  //   height:189 ,
  //   waist:89,
  //   neck:40,
  //   activity:'Sedentary',
  //   target:0.5,
  //   fatIntake:1,
  //   proteinIntake:2.5,
  //   isSet: true
  // };





  function doCalc(){

    ////////////////////Calc functions//////////////////////////////////////////////////////////
    var log10 = function(x){
      return Math.log(x)/Math.log(10);
    }

    var isMan = function(){
      return info.gender === 'Man';
    }

    var bf = function(height,neck,waist,hips){
      if(isMan()){
        return 86.01*log10((waist/2.54)-(neck/2.54))-70.041*log10(height/2.54)+36.76;
      }else {
        return 163.205*log10((waist/2.54)+(hips/2.54)-(neck/2.54))-97.684*log10(height/2.54)+78.387;
      }
    }

    var lbm = function(bf,weight){
      return weight*(1-(bf/100));
    }

    var bmr = function(lbm){
      return (lbm*21.6)+370;
    }

    var tdee = function(bmr,activity){
      if(activity === "Sedentary"){
        return bmr*1.2;
      } else if(activity === "Lightly"){
        return bmr*1.375;
      } else if(activity === "Moderately"){
        return bmr*1.55;
      } else if(activity === "A lot"){
        return bmr*1.725;
      } else if(activity === "Extreme"){
        return bmr*1.9;
      }
    }
    /////////////////////////////////////////////////////////////////////////////////////

    info.bf = bf(info.height,info.neck,info.waist,info.hips);
    info.lbm = lbm(info.bf,info.weight);
    info.bmr = bmr(info.lbm);
    info.tdee = tdee(info.bmr,info.activity);

    var calories = function(){
      if(info.isCutting){
        return info.tdee-(info.target*1100);
      }else{
        return info.tdee+(info.target*440);
      }
    }

    var gramsFat = function(){
      if(info.isCutting){
        return info.lbm*info.fatIntake;
      }else{
        return info.calories*(info.fatIntake/100)/9;
      }
    }

    var calcCarb = function(calories,protein,fat){
      return ((calories-(protein*4))-(fat*9))/4;
    }


    info.calories = calories();
    info.gramsProtein = info.lbm*info.proteinIntake;
    info.gramsFat = gramsFat();
    info.gramCarb = calcCarb(info.calories,info.gramsProtein,info.gramsFat);

    if(!info.notCycling){
      info.caloriesTrainDays = (info.calories*7)/(info.trainDays+(7-info.trainDays)*(1-(info.diffCalorie/100)));
      info.proteinTrainDays = info.gramsProtein;
      info.fatTrainDays = (info.gramsFat*7)/((7-info.trainDays)+(info.trainDays)*(1-(info.diffFat/100)))*(1-info.diffFat/100);

      info.carbTrainDays = calcCarb(info.caloriesTrainDays,info.proteinTrainDays,info.fatTrainDays);

      info.caloriesRestDays = ((info.calories*7)/
      (info.trainDays+(7-info.trainDays)*(1-(info.diffCalorie/100))))
      *(1-(info.diffCalorie/100));

      info.proteinRestDays = info.proteinTrainDays;

      info.fatRestDays = (info.gramsFat*7)/
      ((7-info.trainDays)+(info.trainDays)*(1-(info.diffFat/100)));

      info.carbRestDays = calcCarb(info.caloriesRestDays,info.proteinRestDays,info.fatRestDays);
      console.log(info);
    }
  }


  return{
    getInfo: function(){
      return info;
    },
    setInfo: function(infoReceived){
      info=infoReceived;
    },
    doCalc: function(){
      doCalc();
    }
  };
}]);
