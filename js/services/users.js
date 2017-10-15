
 app.factory('users', function($http,$firebaseArray,$firebaseObject){

        var ref = firebase.database().ref().child("users"); 
        var users = $firebaseArray(ref);
        var key;



        var LOCAL_TOKEN_KEY = 'yourTokenKey';
        var username = '';
        var isAuthenticated = false;
        var role = '';
        var authToken;




        return {
          signup: function(user) {             
              users.$add({
                name: user.username,
                email: user.email,
                password: user.password 
              }).then(function(ref) {   
                key = ref.key;

                 window.localStorage.setItem(LOCAL_TOKEN_KEY, key);
                 isAuthenticated = true;
                 authToken = key;


               // Session.create(key);    
               // console.log('Added:',key);
              })
              return key;
          },
          signin: function(credentials) {
              
              for(var i = 0; i< users.length; i++){
                if(credentials.username == users[i].username && credentials.password == users[i].password){
                    window.localStorage.setItem(LOCAL_TOKEN_KEY, key);
                }
                
              }

          },
          isAuthenticated:  function () {
             var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
            if (token) {
              return token;
            }
          },
          getUser: function(token) {
            var data = ref.child(token);   
            if (data) {
              return $firebaseArray(data);
            }
          }
        };

 });
 


//  app.service('Session', function () {
//   this.create = function (key) {
//     this.key = key;   
//   };
//   this.destroy = function () {
//     this.key = null;   
//   };
// })