angular.module('app.services')

  .factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/");
      return $firebaseAuth(ref);
    }
  ]);
