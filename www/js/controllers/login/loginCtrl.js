angular.module('app.controllers')
    .controller('loginCtrl', function ($state, $scope, $window, PopupFactory, $ionicPopup, $ionicModal) {


          $ionicModal.fromTemplateUrl('templates/login/modalForgotPass.html', {
            scope: $scope,
            animation: 'slide-in-up'
          }).then(function(modal) {
            $scope.modal = modal;
          });

          $ionicModal.fromTemplateUrl('templates/login/modalSignup.html', {
            scope: $scope,
            animation: 'slide-in-up'
          }).then(function(modal) {
            $scope.modalSignup = modal;
          });

          $scope.forgotPass = function(email){
            console.log(email);
            //send a popup for confirmation
            //do something
          }

          $scope.signup = function(form,newUser){
            console.log(form);
            console.log(newUser);
            //do something
          }

          $scope.login = function (form,user){
            console.log(user);
            console.log(form);
            // $state.go('tabs.overview');
          };
});
