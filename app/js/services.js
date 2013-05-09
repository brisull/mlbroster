'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('mlbRoster.services', []).
  value('version', '0.1');

angular.module('mlbRoster.services', ['ngResource']).
    factory('Players', function($resource){
        return $resource('data/mlb_rosters_3.json', {}, {
<<<<<<< HEAD
            query: {method:'GET', params:{}, isArray:true},
            get: {method:'GET'}
=======
            query: {method:'GET', params:{}, isArray:true}
>>>>>>> 049528f12c824340b4cd415bc892e215be42f192
        });
//
//        return $resource('/api/restaurant/:id', {id: '@id'});
    });
