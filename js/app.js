var app = angular.module('flux', [])
.controller('FluxCtrl', ['$scope', function($scope) {
    // var power = 1370;
    // var AU = 1495978.707;
    $scope.flux = {
        distance: 1
    };
    $scope.planetFlux = function(i){
        $scope.flux.distance = $scope.planets[i].a;
    }
    $scope.planets = [
        {
            name: 'earth',
            e: '0.98',
            sd: 86400,
            a: 1.00000102
        },
        {
            name: 'mars',
            e: '0.98',
            sd: 88775.244147,
            a: 1.523679
        },
        {
            name: 'ceres',
            e: '0.98',
            sd: 32666.4,
            a: 2.7675
        }
    ];
}]);