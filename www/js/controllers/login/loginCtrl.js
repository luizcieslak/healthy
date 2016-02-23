angular.module('app.controllers')
    .controller('loginCtrl', [
        '$state', '$scope', 'PopupFactory',
        function ($state, $scope, UserService, $window, PopupFactory) {

            $scope.signUpUser = function () {

              var myPopup = PopupFactory.getSignupPopup();
              myPopup.then(function(res) {

                UserService.init();
                UserService.createUser($scope._newUser).then(function (_data) {
                    $scope.user = _data;

                    alert("Success Creating User Account ");

                    //$state.go('login', {});

                }, function (_error) {
                    alert("Error Creating User Account " + _error.debug)
                });

                console.log('created!', res);
              });
          };

          $scope.goToInfo = function (){
            $state.go('tabs.overview');
          };
}]);
