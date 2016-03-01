angular.module('app.services')
  //Service that provides the helpAlert for the templates.
  .factory('PopupFactory', function($ionicPopup){
    function getAlertPopup() {
      return $ionicPopup.alert({
        templateUrl: 'templates/helpAlert.html',
        title: 'Help me!'
      })
    };

    function getSignupPopup(){
      return $ionicPopup.show({
        templateUrl: 'templates/signup.html',
        title: 'Enter your information',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Create</b>',
            type: 'button-calm',
            onTap: function(e) {
              return $scope._newUser;
            }
          }
        ]
      })
    };



    return{
      getAlertPopup: getAlertPopup,
      getSignupPopup: getSignupPopup
    };
  });
