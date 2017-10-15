var cartControllers = angular.module('cartControllers', []);

app.controller('CartCtrl', function ($scope,$cookieStore){

	$scope.IncQuantity = function(product){

		if(product.quantity > 0 && product.quantity <= 5){
			product.quantity += 1;
			//product.product_total = product.quantity * product.ap;
		}

		$scope.total = 0;
		$cookieStore.put("cart", $scope.cart);
		for(var i = 0; i< $scope.cart.length; i++){
		 	$scope.total += $scope.cart[i].quantity * $scope.cart[i].ap;
 		}
			

	}


	$scope.DecQuantity = function(product){
		
	 	if(product.quantity > 1){
			product.quantity -= 1;
			product.product_total = product.quantity * product.ap;
		}

		$scope.total = 0;
		$cookieStore.put("cart", $scope.cart);
		for(var i = 0; i< $scope.cart.length; i++){
		 	$scope.total += $scope.cart[i].quantity * $scope.cart[i].ap;
 		}
	}

	
});