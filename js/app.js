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
    $scope.time = new Date();
    $scope.planets = [
        {
            name: 'earth',
            e: 0.0167086,
            sd: 86400,
            sy: 365.2422,
            y: 31556926080,
            a: 1.00000102,
            MA: 358.617,
            MDM: 0.98560911311,
            Phi: 0
        },
        {
            name: 'mars',
            e: 0.0934,
            sd: 88775.244147,
            sy: 668.5991,
            y: 59355048339,
            a: 1.523679,
            MA: 19.387,
            MDM: 0.52403958828,
            Phi: 0
        },
        {
            name: 'ceres',
            e: 0.075823,
            sd: 32666.4,
            sy: 4447.77606348,
            y: 145292832000,
            a: 2.7675,
            MA: 95.9891,
            MDM: 0.21407800764,
            Phi: 0
        }
    ];

    $scope.$watch('time', function(){
        updateAnomaly();
    })
    function updateAnomaly(){
        var millis = $scope.time;
        var jdut = 2440587.5 + millis/86400000;
        var dt = jdut + (37+32.184)/86400 - 2451545;
        for(var i=0; i<$scope.planets.length; i++){
            var m = (dt*$scope.planets[i].MDM + $scope.planets[i].MA) % 360;
            $scope.planets[i].Phi = EccAnom($scope.planets[i].e, m, 10);
            $scope.planets[i].R = ($scope.planets[i].a*(1-Math.pow($scope.planets[i].e,2)))/(1+($scope.planets[i].e*Math.cos($scope.planets[i].Phi/180*Math.PI)));
            $scope.planets[i].flux = 1370*(1/Math.pow($scope.planets[i].R,2));
        }
    }
    function EccAnom(ec,m,dp) {
        var pi=Math.PI, K=pi/180.0;
        var maxIter=30,i=0;
        var delta=Math.pow(10,-dp);
        var E, F;
        m=m/360.0;
        // form.time.value="t/T="+m;
        m=2.0*pi*(m-Math.floor(m));
        if (ec<0.8) E=m;else E=pi;
        F = E - ec*Math.sin(m) - m;
        while ((Math.abs(F)>delta) && (i<maxIter)) {
            E = E - F/(1.0-ec*Math.cos(E));
            F = E - ec*Math.sin(E) - m;
            i = i + 1;
        }
        return angle(ec,E,dp);
        // E=E/K;
        
        // if (i==maxIter) {
        //     str=""+ i+" (max!)";
        // } else {
        //     str=""+i;
        // }
        // form.iter.value=str;

        // return Math.round(E*Math.pow(10,dp))/Math.pow(10,dp);
    }
    function angle(ec,E,dp) {
        K=Math.PI/180.0;
        S=Math.sin(E);
        C=Math.cos(E);
        fak=Math.sqrt(1.0-ec*ec);
        phi=Math.atan2(fak*S,C-ec)/K;
        return Math.round(phi*Math.pow(10,dp))/Math.pow(10,dp);
    }
}]);