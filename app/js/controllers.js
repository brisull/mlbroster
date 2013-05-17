'use strict';

/* Controllers */

function ListCtrl($scope, Players, Scoreboard) {
    // Start with a list of all players
    var allPlayers = Players.query(getTeams);
    var rawScoreboard = Scoreboard.get(getGames);
    // $scope.scoreboard = rawScoreboard;
    $scope.scoreboard = {};
    $scope.teams = [];
    function getGames() {
        $scope.scoreboard.games = [];
    	angular.forEach(rawScoreboard, function(item, key) {
    		if ( !!item.games ) {
    			$scope.scoreboard.date  = item.games.date;

                angular.forEach(item.games.game, function(game) {
                    $scope.scoreboard.games.push(game);
                });

    		}
    	});
    }

	function getTeams() {
		var teams = [];
		
		// filter
		angular.forEach(allPlayers, function(item, key) {
		  if ( teams.indexOf(item.team_abbrev) > -1) {
			    return;
			}
			$scope.teams.push(item);
		});
	}

    function getGame(team_abbrev) {

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
			// console.log(item.player_id);
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


}