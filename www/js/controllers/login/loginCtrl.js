angular.module('app.controllers')
    .controller('loginCtrl', function ($state, $scope, $ionicPopup, $ionicModal, Auth) {

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
            console.log(newUser);
            console.log(form);

            if(form.$valid){
              Auth.$createUser({
                  email: newUser.email,
                  password: newUser.password
                }).then(function(userData) {
                  console.log("User created with uid: " + userData.uid);
                }).catch(function(error) {
                  console.log(error);
                });
            }
          }

          $scope.login = function (form,user){
            console.log(user);
            console.log(form);

            if(form.$valid){

              Auth.$authWithPassword({
                email: user.email,
                password: user.password
              }).then(function(authData) {
                console.log("Logged in as:", authData.uid);
                $state.go('tabs.overview');
              }).catch(function(error) {
                console.error("Authentication failed:", error);
                if(error.code ==='INVALID_PASSWORD')
                  $scope.loginError = "Invalid password!";
                else
                  $scope.loginError = error;

              });
            }

          };

          $scope.fbLogin = function(){
            Auth.$authWithOAuthPopup("facebook").then(function(authData) {
              console.log("Logged in as:", authData.uid);
              $state.go('tabs.overview');
            }).catch(function(error) {
              console.error("Authentication failed:", error);
            });
          }

          $scope.gpLogin = function(){
            Auth.$authWithOAuthPopup("google").then(function(authData) {
              console.log("Logged in as:", authData.uid);
              $state.go('tabs.overview');
            }).catch(function(error) {
              console.error("Authentication failed:", error);
            });
          }
});
