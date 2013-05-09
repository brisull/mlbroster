'use strict';


// Declare app level module which depends on filters, and services
angular.module('mlbRoster', ['mlbRoster.filters', 'mlbRoster.services', 'mlbRoster.directives']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
        $routeProvider.when('/team/:team_abbrev', {templateUrl: 'partials/team.html', controller: 'TeamCtrl'});
        $routeProvider.when('/player/:player_id', {templateUrl: 'partials/player.html', controller: 'PlayerCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
