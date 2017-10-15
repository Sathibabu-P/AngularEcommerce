app.factory('products', function($http, FBMSG, $firebaseArray){
  var ref = new Firebase(FBMSG);
  var products = $firebaseArray(ref);
  // return {
  //   list: function (callback){
  //     $http({
  //       method: 'GET',
  //       url: 'json/products.json',
  //       cache: true
  //     }).then(callback)
  //   },
  //   find: function(id, callback){
  //     $http({
  //       method: 'GET',
  //       url: 'product_' + id + '.json',
  //       cache: true
  //     }).then(callback);
  //   }
  // };
  products.getProducts = function() {
    return products;
    // body...
  }

});	  

