angular.module('MyApp', ['ui.validate'])
    .controller('MainController', function ($scope) {

        $scope.validatePassword = function (value) {
            return  value === $scope.password;
        }
    });
