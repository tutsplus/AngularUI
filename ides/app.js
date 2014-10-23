angular.module('MyApp', ['ui.codemirror', 'ui.ace'])
    .controller('MainController', function ($scope) {


        $scope.cmOpts = {
            lineNumbers: true,
            indentSize: 4,
            tabSize: 4,
            theme: 'solarized',
            mode: 'javascript'
        };


        $scope.aceOpts = {
            theme: 'twilight',
            mode: 'html'
        };
    });
