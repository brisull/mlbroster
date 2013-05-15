'use strict';

/* Directives */


angular.module('mlbRoster.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(team_abbrev);
    };
  }]);

angular.module('mlbRoster.directives').directive('mlbPlayer', function() { 
	return { 
		restrict: 'E',
		replace: true,
		template: '<div class="player">{{player.name}}</player>',
		transclude: true,
		// compile: function compile( tElement, tAttrs, transclude) { 'link' } ,
		// scope: {},
		link: function(scope, element, attrs) {

			var plr = element;
			plr.bind('click', function() {
				alert( scope.player.name +' bats '+ (scope.player.bats == 'L'? 'Left' : 'Right') );
				plr.text(scope.player.name +' | '+ scope.player.bats);

			});
		}
	};
});