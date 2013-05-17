'use strict';

/* Directives */


angular.module('mlbRoster.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('player', function() {
        return {
            restrict: 'E',
            transclude: true,
            // scope: {},
            template: '<div><h2>[{{player.position_txt}}] {{player.name_display_first_last}}</h2>' +
                      '<p>#{{player.jersey_number}}  Throws: {{player.throws}} Bats: {{player.bats}} ' +
                      '</p><pre>{{player}}</pre></div>',
            link: function(scope, element, attrs) {
                  // do something
                 console.log( scope );
            }
        };
    });

