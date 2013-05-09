'use strict';


// Declare app level module which depends on filters, and services
angular.module('mlbRoster', ['mlbRoster.filters', 'mlbRoster.services', 'mlbRoster.directives']).
    config(['$routeProvider', function($routeProvider) {
<<<<<<< HEAD
        $routeProvider.when('/', {templateUrl: 'partials/team.html', controller: 'TeamCtrl'});
=======
        $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
        $routeProvider.when('/team/:team_abbrev', {templateUrl: 'partials/team.html', controller: 'TeamCtrl'});
>>>>>>> 049528f12c824340b4cd415bc892e215be42f192
        $routeProvider.when('/player/:player_id', {templateUrl: 'partials/player.html', controller: 'PlayerCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
