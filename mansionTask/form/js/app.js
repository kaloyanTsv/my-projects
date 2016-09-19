angular.module('formApp', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/step-one', {
        templateUrl: 'templates/step-one.html'
      })
      .when('/step-two', {
        templateUrl: 'templates/step-two.html'
      })
	  .when('/step-three', {
        templateUrl: 'templates/step-three.html'
      })
	  .when('/step-four', {
        templateUrl: 'templates/step-four.html'
    
      })
	 
	  .otherwise({redirectTo:'/step-one',
		templateUrl:'templates/step-one.html'
	  })	

   
}])


.controller('formController', function($scope) {
		

	$scope.regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}";
    $scope.processForm = function() {
        console.log('awesome!');  
    };
    
});

