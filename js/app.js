var  app = angular.module('myApp', ['ngRoute','ngResource','rzModule','firebase','ngCookies']);
//app.constant('FBMSG', 'https://console.firebase.google.com/project/ecommerce-96c0c/database/data/products');
	app.config(function($routeProvider) {
		 $routeProvider
		.when('/', {
		 templateUrl: 'partials/products.html',
		 controller: 'ProductListCtrl'})
		.when('/products/:productId', {
		 templateUrl: 'partials/productDetails.html',
		 controller: 'ProductDetailCtrl'})	
		.when('/signin', {
		 templateUrl: 'partials/signin.html',
		 controller: 'SignInCtrl'})
		 .when('/signup', {
		 templateUrl: 'partials/signup.html',
		 controller: 'SignUpCtrl'})	
		 .when('/cart', {
		 templateUrl: 'partials/cart.html',
		 controller: 'CartCtrl'})	
		 .when('/checkout', {
		 templateUrl: 'partials/checkout.html',
		 controller: 'CheckoutCtrl'})	
}).run(function ($rootScope, users) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
   

      if (users.isAuthenticated()) {
        // user is not allowed
        //$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);

      } else {
        // user is not logged in
        //$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }



  });
})
.controller('ApplicationController', function ($scope,users,$cookieStore) {


	
 		
			 $scope.sizes=[	
 				{"id": 0, "title": "Ex-Small"},
 			  	{"id": 1, "title": "Small"},
				{"id": 2, "title": "Medium"},
				{"id": 3, "title": "Large"}
			  ];
 			$scope.colors=[
 				{"id": 0, "title": "Red"},
				{"id": 1, "title": "Green"},
				{"id": 2, "title": "White"},
				{"id": 3, "title": "Blue"},
 			  ]


 		$scope.cart = [];
	    $scope.total = 0;
	    $scope.count = 0;

	   

	    if($cookieStore.get('cart'))
	    {
	    	 $scope.cart = $cookieStore.get('cart');
	    	 $scope.count = $cookieStore.get('count');
	    	 for(var i = 0; i< $scope.cart.length; i++){
		 		$scope.total += $scope.cart[i].quantity * $scope.cart[i].ap;
 			}
	    }
	   
 		$scope.addItemToCart = function(product){

 			 var flag = 0;
		 	 product.quantity = 1;		 	
		 	 $scope.total = 0;

 			

 			if($scope.cart.length > 0){
 				
 				for(var i = 0; i< $scope.cart.length; i++){
		 			if($scope.cart[i].id === product.id){
		 				flag = 1;		 				
		 			}
		 		}
			 	if(flag == 0){
			 		$scope.count += 1;
			 		$scope.cart.push(product);			 			 		
			 	}
 			} else {
 				$scope.count = 1;
 				$scope.cart.push(product);	 
 			}

 			$cookieStore.put("cart", $scope.cart);
 			$cookieStore.put("count", $scope.count);


 			for(var i = 0; i< $scope.cart.length; i++){
			 	$scope.total += $scope.cart[i].quantity * $scope.cart[i].ap;
	 		}


 		};

 		$scope.removeItemToCart = function(product){

 			$scope.total = 0;
 			//$scope.cart.splice(index, 1);

 			for(var i = 0; i< $scope.cart.length; i++){
	 			if($scope.cart[i].id === product.id){

	 				$scope.cart.splice(i, 1);
	 				//console.log($scope.cart)
	 				// repeat = true;
	 				// $scope.cart[i].count +=1;
	 			}
		 	}

 			for(var i = 0; i< $scope.cart.length; i++){
		 		$scope.total += $scope.cart[i].quantity * $scope.cart[i].ap;
 			}
 			$scope.count -= 1

 			$cookieStore.put("cart", $scope.cart);
 			$cookieStore.put("count", $scope.count);

 		};
})


