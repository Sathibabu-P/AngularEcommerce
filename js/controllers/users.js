var userControllers = angular.module('userControllers', []);


app.controller('SignInCtrl', function ($scope, $routeParams, users){

	$scope.signin = function() {    
    };


});


app.controller('SignUpCtrl', function ($scope, $routeParams, users, $window){


	
	  $scope.credentials = {
		    username: '',
		    password: '',
		    cpassword: '',
		    email: ''
		 };


	$scope.signup = function(credentials) {
    	var key = users.signup(credentials);    	
    	if(key){
    	 	$window.location.href = '#!/';
    	 }
    };

    $scope.signin = function(credentials) {
    	var key = users.signin(credentials);    	
    	 console.log(key);
    	 if(key){
    	 	$window.location.href = '#!/';
    	 }
    	 
    };

    //console.log($scope.currentUser);

	

});

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 
app.directive("compareTo", compareTo);