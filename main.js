var app = angular.module('sampleRequest', ['ngRoute'])  
.config(['$routeProvider',function($routeProvider)
{
    $routeProvider.when('/welcome',{
    templateUrl: '/templates/welcome.html',
    controller:'sampleCtrl'
    })
    .when('/Name the key features of AngularJS',{
        templateUrl: '/templates/Name the key features of AngularJS.html',
        controller:'sampleCtrl'
        })
        .when('/Explain data binding in AngularJS',{
            templateUrl: '/templates/Explain data binding in AngularJS.html',
            controller:'sampleCtrl'
            });
}]);

app.controller('sampleCtrl', function($scope) {
    $scope.update = function() {
        $scope.item.size.code = $scope.selectedItem.code
        // use $scope.selectedItem.code and $scope.selectedItem.name here
        // for other stuff ...
     }
    $scope.message = "This page will be used to display all the students";
 });

