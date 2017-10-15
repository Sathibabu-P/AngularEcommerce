var checkoutControllers = angular.module('checkoutControllers', []);

app.controller('CheckoutCtrl', function ($scope,$firebaseArray,$firebaseObject){

	$scope.user = {
		name: '',
		email:'',
		phoneno:'',
		address: ''
	}

	 var ref1 = firebase.database().ref().child("users"); 
     var users = $firebaseArray(ref1);


      var ref2 = firebase.database().ref().child("orders"); 
      var orders = $firebaseArray(ref2);

		$scope.checkout = function(user){


			 users.$add({
                name: user. name,
                email: user.email,
                phoneno: user.phoneno,
                address: user.address 
              }).then(function(ref) {   
                var key = ref.key;

                if(key){


                		for(var i = 0; i< $scope.cart.length; i++){						 	
                			 orders.$add({
				                user_id: key,
				                product_id: $scope.cart[i].id,
				                product_name: $scope.cart[i].title,
				                product_price: $scope.cart[i].ap,
				                product_quantity: $scope.cart[i].quantity,
				                amount: ($scope.cart[i].ap * $scope.cart[i].quantity)			           
				              }).then(function(ref) {   
				                key = ref.key;			               
				              })
				 		}
                		
                }
               
              })


			//console.log(user);
			//console.log($scope.cart[0]);
		}

	
});