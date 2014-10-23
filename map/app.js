function onGoogleReady () {
    angular.bootstrap(document.getElementsByTagName('body')[0], ['MyApp']);
}

angular.module('MyApp', ['ui.map'])
    .controller('MainController', function ($scope) {

        $scope.mapOptions = {
            center: new google.maps.LatLng(25.197139, 55.274111),
            zoom: 15
        };

        $scope.addMarker = function (event, params) {
            new google.maps.Marker({
                map: $scope.MyMap,
                position: params[0].latLng
            });
        };
    });
