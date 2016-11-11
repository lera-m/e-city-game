define(['superagent', '../settings', 'q'], function (Superagent, Settings, Q) {

    var Game = function(){
          this.loggedIn = false;
    };
    
    Game.prototype.logIn = function(user, password){
        var defer = Q.defer();
        
        Superagent
            //.get('http://ecity.org.ua:8080/user/hello')
            .get(Settings.host + Settings.api + '/user/hello')
            .set('Accept', 'application/json')
            .auth(user, password, {type:'auto'})
            .end((error, response) => /* arrow function */{
                if(!error || response.body.length > 0){
                    this.loggedIn = true;
                    defer.resolve();
                } else {
                    this.loggedIn = false;
                    defer.reject();
                }
            });
            
        return defer.promise;
    };
    
    Game.prototype.logOut = function(){
        this.loggedIn = false;
    };

    Game.prototype.isLoggedIn = function(){
        return this.loggedIn;
    };
    
    return Game;
});
