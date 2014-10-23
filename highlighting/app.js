angular.module('MyApp', ['ui.highlight', 'ngSanitize'])
    .controller('MainController', function ($scope) {
        $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.';
    });
