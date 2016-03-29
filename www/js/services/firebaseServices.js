angular.module('app.services')

  .factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/");
      return $firebaseAuth(ref);
    }
  ])

  .factory("foodsRef", ["$firebaseArray",
  function($firebaseArray) {
      // create a reference to the database node where we will store our data
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/foods");

      // return just the ref, so we can apply query in the $firebaseArray
      return ref;
  }])

  .factory("usersRef", ["$firebaseObject",
  function($firebaseObject) {
      // create a reference to the database node where we will store our data
      var ref = new Firebase("https://popping-torch-1733.firebaseio.com/users");
      return ref;
  }])

  .factory("searchFood", ["$firebaseArray", "foodsRef",
  function($firebaseArray, foodsRef) {
    return function(string){
      //create a query to search for the food
      //"The \uf8ff character used in the query above is a very high code point in the Unicode range.
      //Because it is after most regular characters in Unicode, the query matches all values that start with a string".
      var query = foodsRef.orderByChild("name").startAt(string).endAt(string + '\uf8ff');

      //return the array with matched foods
      return $firebaseArray(query);
    }
  }])

  .factory("dayMeals", ["$firebaseArray", "usersRef",
  function($firebaseArray, usersRef) {
    return function(uid,date){

      var ref = usersRef.child(uid).child(date.getFullYear()).child(date.getMonth()).child(date.getDate()).child("meals");

      return $firebaseArray(ref);
    }
  }])

  .factory("dayMealsWithTotal", ["$firebaseArray", "usersRef",
    function($firebaseArray, usersRef) {
      // create a new service based on $firebaseArray
      var TotalFactory = $firebaseArray.$extend({
        getTotal: function() {
          var total = {
            calories:0,
            protein:0,
            carb:0,
            fat:0,
          };
          // the array data is located in this.$list
          angular.forEach(this.$list, function(meal) {
            total.calories += meal.calories;
            total.protein += meal.protein;
            total.carb += meal.carb;
            total.fat += meal.fat;
          });
          return total;
        }
      });

      return function(uid,date) {
        // create an instance of dayTotal based on the date (the new operator is required)
        var ref = usersRef.child(uid).child(date.getFullYear()).child(date.getMonth()).child(date.getDate()).child("meals");
        return new TotalFactory(ref);
      };
    }
  ])

  .factory("User", ["$firebaseObject", "usersRef",
  function($firebaseObject, usersRef) {
    return function(uid) {
      // create a reference to the database node where we will store our data
      var userRef = usersRef.child(uid);
      // return it as a synchronized object
      return $firebaseObject(userRef);
    }
  }]);
