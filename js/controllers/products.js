/*app.controller('HomeCtrl', function ($scope, data){
	data.list(function(data) {
	  $scope.data = data;
	  console.log($scope.data);
	});
});*/
/*productControllers.controller('ProductListCtrl', function($scope, products) {
			 products.getProducts().then(function (success){
					 $scope.products = success.data;
			  		 console.log($scope.products)
					 
				},function (error){
					console.log(error, 'cant get data.');						
				});




});*/
var productControllers = angular.module('productControllers', []);

app.controller('ProductDetailCtrl', function ($scope, $routeParams, products){






	$scope.product = products.find($routeParams.productId);
	
 
 /* products.find($routeParams.productId, function(product) {
    $scope.product = product;
  });*/
});



app.controller('ProductListCtrl', function ($scope, products,$firebaseArray){

	 console.log($scope.currentUser);
	  $scope.products = products.list();

 

  
  $scope.slider = {
	  min: 250,
	  max: 5000,
	  options: {
		floor: 250,
		ceil: 5000
	  }
	};
	
  $scope.slider.min = 250;
  $scope.slider.max = 5000;
  
  $scope.priceRange = function(products) {
    return (parseInt(products['sp']) >= $scope.slider.min && parseInt(products['sp']) <= $scope.slider.max);
  };
  
  /*size filter*/
  $scope.sizesIncludes = []; 
  $scope.includeSizes = function(size) {
	
        var i = $.inArray(size, $scope.sizesIncludes);
        if (i > -1) {
            $scope.sizesIncludes.splice(i, 1);
        } else {
            $scope.sizesIncludes.push(size);
        }
		
    }
    
    $scope.sizeFilter = function(products) {
		
        if ($scope.sizesIncludes.length > 0) {
            if ($.inArray(products.size, $scope.sizesIncludes) < 0)
                return;
        }
        
        return products;
    }
	/*size filter*/
	
 /*color filter*/
  $scope.colorIncludes = []; 
  $scope.includeColor = function(color) {
	
        var i = $.inArray(color, $scope.sizesIncludes);
        if (i > -1) {
            $scope.colorIncludes.splice(i, 1);
        } else {
            $scope.colorIncludes.push(color);
        }
		
    }
    
    $scope.colorFilter = function(products) {
		
        if ($scope.colorIncludes.length > 0) {
            if ($.inArray(products.color, $scope.colorIncludes) < 0)
                return;
        }
        
        return products;
    }
	/*color filter*/
	
	
		$scope.orderBy = 'price-low-high';
    
        $scope.$watch("orderBy", function(newval) {
            $scope.reverse = newval === 'price-high-low' || newval === 'letter-za';
        });
    
        $scope.reverse = false;
    
		$scope.orderByOptions = function (product) {
			if ($scope.orderBy == 'price-high-low') {
				return product.ap;
			}			
			else return product.ap;
		};    
  		$scope.orderByPriceLowToHigh = function (product) {
			return product.ap;
		};  
		
		
	

});

