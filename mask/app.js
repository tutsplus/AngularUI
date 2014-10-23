angular.module('MyApp', ['ui.mask'])
    .controller('MainController', function ($scope) {
        $scope.mask1 = '9999 9999 9999 9999';

        $scope.mask2 = '(999) 999-999';

        $scope.mask3 = 'A9A9***A9A9';
    });


// 9 A *
