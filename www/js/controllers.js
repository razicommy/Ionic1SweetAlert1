angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.showAlert = function() {
      swal({
        title: "Success!",
        text: "Successfully clicked stuff!",
        type: "success"
      }, function() {
        alert('yo');
      });
    };
    
}])
 