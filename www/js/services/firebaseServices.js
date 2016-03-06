angular.module('app.services')

  .factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/");
      return $firebaseAuth(ref);
    }
  ])

  .factory("Foods", ["$firebaseArray",
  function($firebaseArray) {
      // create a reference to the database node where we will store our data
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/foodArray");

      // return just the ref, so we can apply query in the $firebaseArray
      return $firebaseArray(ref);
  }])

  .factory("Users", ["$firebaseObject",
  function($firebaseObject) {
    return function(uid) {
      // create a reference to the database node where we will store our data
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/users");
      var userRef = ref.child(uid);

      // return it as a synchronized object
      return $firebaseObject(userRef);
    }
  }]);
