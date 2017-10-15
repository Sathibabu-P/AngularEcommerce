/*app.factory('Airport', function  ($resource) {
		return $resource('/airports/:airportCode');
	})
	.factory('Flights', function  ($resource) {
		return $resource('/flights');
	})
	.factory('Reservations', function  ($resource) {
		return $resource('/reservations');
	});*/
	



 app.factory('products', function($http,$firebaseArray,$firebaseObject){

        var ref = firebase.database().ref(); 

        return {
          list: function() {
              var data = $firebaseArray(ref.child("products"));
              return data;
          },
          find: function(id) {
              var data = $firebaseObject(ref.child("products").child(id));             
              return data;
          }
        };


        // return {
        //   list: function(callback){       
        //     var products= firebase.database().ref().child("products");     
        //     return $firebaseArray(products);;
        //   },
        //   find: function(id,callback) {
        //   console.log(id);

        //    var data = $firebaseObject(firebase.database().ref().child("products").child(id));
        //     console.log(data);
        //     return data;

        //   // var product = $firebaseObject(firebase.database().ref().child("products").child(id));


        //   // var product = firebase.database().ref().child("products").child(id);
           
        //    //return product;
        //   }
        // };
 });
 
	  
  

// app.factory('products', function($http){

//   //var ref = firebase.database().ref().child("products");

//   //var products = $firebaseArray(ref);
//   // var ref = new Firebase(FBMSG);
//   // var products = $firebaseArray(ref);
//   // // return {
//   // //   list: function (callback){
//   // //     $http({
//   // //       method: 'GET',
//   // //       url: 'json/products.json',
//   // //       cache: true
//   // //     }).then(callback)
//   // //   },
//   // //   find: function(id, callback){
//   // //     $http({
//   // //       method: 'GET',
//   // //       url: 'product_' + id + '.json',
//   // //       cache: true
//   // //     }).then(callback);
//   // //   }
//   // // };
//   // products.getProducts = function() {
//   //   return products;
//   //   // body...
//   }

// });   
