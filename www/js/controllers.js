angular.module('app.controllers', ['ngMessages'])

.controller('loginCtrl', function($scope) {
  $scope.data={
    username:'',
    password:''
  };


})

.controller('informationsCtrl', function($scope,$state,$ionicPopup,sharedInfo) {
  $scope.genderList=[
    {
      text:"Man",
      value:"Man"
    },
    {
      text:"Woman",
      value:"Woman"
    }
  ];

  $scope.objectiveList=[
    {
      text:"Bulking",
      value:"Bulking"
    },
    {
      text:"Cutting",
      value:"Cutting"
    }
  ];

  $scope.activityList=[
    {
      text:"Sedentary",
      value:"Sedentary"
    },
    {
      text:"Lightly Active",
      value:"Lightly"
    },
    {
      text:"Moderately Active",
      value:"Moderately"
    },
    {
      text:"Very Active",
      value:"A lot"
    },
    {
      text:"Extremely Active",
      value:"Extreme"
    }
  ];

  $scope.data={
    gender:'Man',
    objective:'Cutting',
    isCutting:true,
    weight:78,
    height:189,
    waist:89,
    neck:38,
    activity:'Moderately'
  };

  $scope.isWoman = function(){
    return !($scope.data.gender === 'Woman');
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
      //
    }
  }

  // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Help',
     template: 'Leia o livro: universo em desencanto'
   });
   alertPopup.then(function(res) {
     console.log('T O I S');
   });
 };



})

.controller('mealsCtrl', function($scope) {

})

.controller('trackingCtrl', function($scope) {
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
})

.controller('bulkingCtrl', function($scope,$state,sharedInfo) {
  $scope.data={
    target:1,
    fatIntake:20,
    proteinIntake:2.5
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
})

.controller('cuttingCtrl', function($scope,$state,sharedInfo) {
  $scope.data={
    target:0.5,
    fatIntake:1,
    proteinIntake:2.5
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
})

.controller('macroCyclingCtrl', function($scope,$state,sharedInfo) {
  $scope.data={
    notCycling:false,
    trainDays: 3,
    diffCalorie: 30,
    diffFat: 40
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
      //$scope.info ready to upload or do the calculations.
      sharedInfo.setInfo($scope.info);
      // console.log(sharedInfo.getInfo());
      $state.go('tabsController.calc');
    }
  }

})

.controller('calcCtrl', function($scope,$state,sharedInfo) {

  $scope.editInfo = function(){
    $state.go('tabsController.info')
  }

  var log10 = function(x){
    return Math.log(x)/Math.log(10);
  }

  var isMan = function(){
    return $scope.info.gender === 'Man';
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

  $scope.info = sharedInfo.getInfo();
  $scope.info.bf = bf($scope.info.height,$scope.info.neck,$scope.info.waist,$scope.info.hips);
  $scope.info.lbm = lbm($scope.info.bf,$scope.info.weight);
  $scope.info.bmr = bmr($scope.info.lbm);
  $scope.info.tdee = tdee($scope.info.bmr,$scope.info.activity);

  var calories = function(){
    if($scope.info.isCutting){
      return $scope.info.tdee-($scope.info.target*1100);
    }else{
      return $scope.info.tdee+($scope.info.target*440);
    }
  }

  var gramsFat = function(){
    if($scope.info.isCutting){
      return $scope.info.lbm*$scope.info.fatIntake;
    }else{
      return $scope.info.calories*($scope.info.fatIntake/100)/9;
    }
  }

  var calcCarb = function(calories,protein,fat){
    return ((calories-(protein*4))-(fat*9))/4;
  }


  $scope.info.calories = calories();
  $scope.info.gramsProtein = $scope.info.lbm*$scope.info.proteinIntake;
  $scope.info.gramsFat = gramsFat();
  $scope.info.gramCarb = calcCarb($scope.info.calories,$scope.info.gramsProtein,$scope.info.gramsFat);

  if(!$scope.info.notCycling){
    $scope.info.caloriesTrainDays = ($scope.info.calories*7)/($scope.info.trainDays+(7-$scope.info.trainDays)*(1-($scope.info.diffCalorie/100)));
    $scope.info.proteinTrainDays = $scope.info.gramsProtein;
    $scope.info.fatTrainDays = ($scope.info.gramsFat*7)/((7-$scope.info.trainDays)+($scope.info.trainDays)*(1-($scope.info.diffFat/100)))*(1-$scope.info.diffFat/100);

    $scope.info.carbTrainDays = calcCarb($scope.info.caloriesTrainDays,$scope.info.proteinTrainDays,$scope.info.fatTrainDays);

    $scope.info.caloriesRestDays = (($scope.info.calories*7)/
    ($scope.info.trainDays+(7-$scope.info.trainDays)*(1-($scope.info.diffCalorie/100))))
    *(1-($scope.info.diffCalorie/100));

    $scope.info.proteinRestDays = $scope.info.proteinTrainDays;

    $scope.info.fatRestDays = ($scope.info.gramsFat*7)/
    ((7-$scope.info.trainDays)+($scope.info.trainDays)*(1-($scope.info.diffFat/100)));

    $scope.info.carbRestDays = calcCarb($scope.info.caloriesRestDays,$scope.info.proteinRestDays,$scope.info.fatRestDays);
      console.log($scope);
  }






})

.controller('underConstructionCtrl', function($scope) {
  var deploy = new Ionic.Deploy();

  // Update app code with new release from Ionic Deploy
  $scope.doUpdate = function() {
    deploy.update().then(function(res) {
      console.log('Ionic Deploy: Update Success! ', res);
    }, function(err) {
      console.log('Ionic Deploy: Update error! ', err);
    }, function(prog) {
      console.log('Ionic Deploy: Progress... ', prog);
    });
  };

  // Check Ionic Deploy for new code
  $scope.checkForUpdates = function() {
    console.log('Ionic Deploy: Checking for updates');
    deploy.check().then(function(hasUpdate) {
      console.log('Ionic Deploy: Update available: ' + hasUpdate);
      $scope.hasUpdate = hasUpdate;
    }, function(err) {
      console.error('Ionic Deploy: Unable to check for updates', err);
    });
  }
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
})
