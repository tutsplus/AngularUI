angular.module('MyApp', ['ui.calendar'])
    .controller('MainController', function ($scope) {
        var events = [
            { title: "Mom's Birthday", start: new Date(2014, 8, 10) },
            { title: "Anniversary Party", start: new Date(2014, 8, 19, 19, 30), end: new Date(2014, 8, 2, 22, 30), allDay: false },
            { title: "Business Conference", start: new Date(2014, 8, 22), end: new Date(2014, 8, 24) }
        ];

        $scope.eventSources = [events];

        $scope.calOptions = {
            editable: true, 
            header: {
                left: 'prev',  
                center: 'title', 
                right: 'next'
            }
        };
        
    });
