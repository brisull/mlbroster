'use strict';

/* Controllers */

<<<<<<< HEAD
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
=======
function ListCtrl($scope, Players) {
    // Start with a list of all players
    var allPlayers = Players.query(getTeams);

    // Get just the one we want
	function getTeams() {
		var teams = $scope.teams = [];

		// filter
		angular.forEach(allPlayers, function(item, key) {
		  if ( teams.indexOf(item.team_abbrev) > -1) {
			return;
			}
			teams.push(item.team_abbrev);
		});
	}
    $scope.orderProp = 'team_abbrev';
    $scope.foo = 'bar';
}

function PlayerCtrl($scope, $routeParams, Players) {

	// Start with a list of all players
    var allPlayers = Players.query(getPlayer);

    // Get just the one we want
	function getPlayer() {
		$scope.player = {};

		// filter
		angular.forEach(allPlayers, function(item, key) {
			console.log(item.player_id);
		  if ($routeParams.player_id.length && $routeParams.player_id == item.player_id ) { 
		  	$scope.player = item;
		  	return; 
		  }
		});
	}
}

function TeamCtrl($scope, $routeParams, Players) {
	// Start with a list of all players
    var allPlayers = Players.query(getTeamPlayers);

    $scope.params = $routeParams;
    $scope.team = $routeParams.team_abbrev;
    // Get just the one we want
	function getTeamPlayers() {
		$scope.players = [];

		// filter
		angular.forEach(allPlayers, function(item, key) {
			// console.log(item.player_id);
			if ($routeParams.team_abbrev.length && $routeParams.team_abbrev !== item.team_abbrev ) { 
				return; 
			}
			$scope.players.push(item);
		});
	}

>>>>>>> 049528f12c824340b4cd415bc892e215be42f192
}