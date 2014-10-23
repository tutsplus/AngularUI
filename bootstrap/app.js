angular.module('MyApp', ['ui.bootstrap'])
    .controller('MainController', function ($scope) {

        $scope.sections = [
            { heading: 'First Dynamic Section', content: 'this is the the first dynamic section content' },
            { heading: 'Second Dynamic Section', content: 'this is the the first dynamic section content' },
            { heading: 'Third Dynamic Section', content: 'this is the the first dynamic section content' }
        ];

    });
