var app = window.angular.module('app', [])

app.factory('characterFetcher', characterFetcher)
app.controller('mainCtrl', mainCtrl)

function characterFetcher ($http) {

  var API_ROOT = 'characters'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, characterFetcher, $http, $window) {

  $scope.characters = []

    characterFetcher.get()
    .then(function (data) {
      $scope.characters = data
    })
    
    $scope.goToCreatePage = function(){
    console.log("Going to character creation page");   
    $window.location.href = '/characterCreator';
    }
    
    $scope.goBackToMainPage = function(){
    console.log("Going to character creation page");   
    $window.location.href = '/';
    }
    
    
    $scope.addCharacter = function() {
      var formData = {name:$scope.Name,imageUrl:$scope.ImageUrl,clas:$scope.Class,bio:$scope.Bio};
      console.log(formData);
      var url = 'characters';
      $http({
         url: url,
         method: "POST",
         data: formData
      }).success(function(data, status, headers, config) {
        $scope.goBackToMainPage();
        console.log("Post worked");
      }).error(function(data, status, headers, config) {
        console.log("Post failed");
      });
}
    
    
}
 