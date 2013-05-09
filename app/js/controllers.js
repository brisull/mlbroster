'use strict';

/* Controllers */

function TeamCtrl($scope, Players) {
    $scope.players = Players.query();
    $scope.orderProp = 'name';
    $scope.foo = 'bar';
}

function PlayerCtrl($scope, $routeParams, Players) {
    $scope.player = Players.get({player_id: $routeParams.player_id}, function() {
       // $scope.mainImageUrl = phone.images[0];
    });
    console.log($routeParams);
}