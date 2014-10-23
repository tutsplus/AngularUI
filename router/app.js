var users = [
    null,
    { id: 1, name: 'Joe Smith' },
    { id: 2, name: 'Polly Perkins' },
    { id: 3, name: 'Joan Watson' }
];

angular.module('MyApp', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'home',
            url: '/',
            template: '<h1> Home </h1>'
        })
        .state('about', {
            url: '/about',
            template: '<h1> About </h1>'
        })
        .state('user-view', {
            url: '/user/:userID',
            controller: 'UserViewController',
            template: '<h1> {{user.name}} </h1> <p> User ID: {{user.id}} </p>'
        });
    })
    .controller('UserViewController', function ($scope, $stateParams) {
        $scope.user = users[$stateParams.userID];
    });
