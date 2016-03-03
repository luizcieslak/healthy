angular.module('app.services')

  .factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/");
      return $firebaseAuth(ref);
    }
  ])

  .factory("Foods", ["$firebaseObject",
  function($firebaseObject) {
    return function(foodname) {
      // create a reference to the database node where we will store our data
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/foods");
      var foodRef = ref.child(foodname);

      // return it as a synchronized object
      return $firebaseObject(foodRef);
    }
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
