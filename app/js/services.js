'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('mlbRoster.services', []).
  value('version', '0.1');

angular.module('mlbRoster.services', ['ngResource']).
    factory('Players', function($resource){
        return $resource('data/mlb_rosters_3.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });


//
//        return $resource('/api/restaurant/:id', {id: '@id'});
    })

    .factory('Scoreboard', function($resource){
        return $resource('data/mini_scoreboard.json', {}, {
        	query: {method:'GET', params:{}, isArray:true}
        });
    });
