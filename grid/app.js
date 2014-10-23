angular.module('MyApp', ['ngGrid'])
    .controller('MainController', function ($scope) {

        $scope.superheroes = [
            { other: 10, firstName: 'Tony', lastName: 'Stark', alterEgo: 'Iron Man' },
            { other: 20, firstName: 'Steve', lastName: 'Rogers', alterEgo: 'Captain America' },
            { other: 30, firstName: 'Natasha', lastName: 'Romanoff', alterEgo: 'Black Widow' },
            { other: 40, firstName: 'Bruce', lastName: 'Banner', alterEgo: 'Hulk' },
            { other: 50, firstName: 'Clint', lastName: 'Barton', alterEgo: 'Hawkeye' },
            { other: 60, firstName: 'Thor', lastName: 'Odinson', alterEgo: 'Thor' },
        ];

        $scope.selected = [];
        
        $scope.gridOpts = {
            data: 'superheroes',
            showGroupPanel: true,
            selectedItems: $scope.selected,
            multiSelect: false,
            columnDefs: [
                { field: 'firstName', displayName: 'First Name'},
                { field: 'lastName', displayName: 'Last Name'}
            ]
        };
    });
