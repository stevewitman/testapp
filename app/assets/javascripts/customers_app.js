var app = angular.module("customers",[]);

app.controller("CustomerSearchController", [
          "$scope",
  function($scope) {
    $scope.customers = [];
    $scope.search = function(searchTerm) {
      $scope.customers = [
        {
          "first_name": "First",
          "last_name": "Lastname",
          "email": "user1@test.com",
          "username": "user1",
          "created_at": "2015-04-05"
        },
        {
          "first_name": "Second",
          "last_name": "Lastname",
          "email": "user2@test.com",
          "username": "user2",
          "created_at": "2015-04-05"
        },
        {
          "first_name": "Third",
          "last_name": "Lastname",
          "email": "user3@test.com",
          "username": "user3",
          "created_at": "2015-04-05"
        }
      ];
    }
  }
]);
