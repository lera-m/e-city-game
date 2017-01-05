define(['superagent', '../settings', 'q'], function (Superagent, Settings, Q) {

    var Game = function(){
          this.loggedIn = false;
          this.gameId = 0;
          this.gameStatus = false;
          this.gameWasStarted = false;
          this.giveUpCode = 0;
    };

    Game.prototype.getGameId = function(){
        var defer = Q.defer();

        Superagent
                .get(Settings.host + Settings.api + '/game/new')
                .set('Accept', 'application/json')
                .end((error, response) => /* arrow function */{
                    if(!error || response.body.length > 0){
                        this.gameId = JSON.parse(response.text).id;
                        console.log(this.gameId);

                        // Tell all listeners that game id changed
                        this.triggerChangeGameId();

                        defer.resolve();
                    } else {
                        defer.reject();
                    }
                });
            return defer.promise;
    };

    Game.prototype.logIn = function(user, password){
        var defer = Q.defer();

        Superagent
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
    
     Game.prototype.getGameStatus = function (){
         var defer = Q.defer();
         
         Superagent
            .get(Settings.host + Settings.api + '/game/status')
            .set('Accept', 'application/json')
            .end((error, response) => /* arrow function */{
                this.gameId = JSON.parse(response.text).id;
                
console.log('getGameStatus => gameId', this.gameId);
                
                if (!error) {
                    this.loggedIn = true;
                    defer.resolve();
                } else {
                    this.loggedIn = false;
                    defer.reject();
                }
            });

        return defer.promise;
    };
    
    Game.prototype.giveUp = function (){
        
        return Q.promise((resolve, reject) => {
            Superagent
                .get(Settings.host + Settings.api + '/game/over/giveup')
                .set('Accept', 'application/json')
                .query({
                    game_id: this.gameId
                })
                .end((error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    
                    this.giveUpCode =  response.body.gameStatus.code;
                    
                    this.changeGameWasStarted(false);
                                        
                    resolve(this.giveUpCode);
                });
        });
    };
    
    Game.prototype.changeGameWasStarted = function (value){
        this.gameWasStarted = value;
    };

    Game.prototype.logOut = function(){
        this.loggedIn = false;
    };

    Game.prototype.isLoggedIn = function(){
        return this.loggedIn;
    };

    Game.prototype.onChangeGameId = function (callback) {
        if (!this.callbacks) {
            this.callbacks = [];
        }

        this.callbacks.push(callback);
    };

    Game.prototype.offChangeGameId = function (callback) {
        if (!this.callbacks) {
            return;
        }


        this.callbacks = this.callbacks.filter(cb => {
            return cb !== callback;
        });
        
    };

    Game.prototype.triggerChangeGameId = function () {
        if (!this.callbacks) {
            return;
        }

        this.callbacks.forEach(callback => {
            callback(this.gameId);
        });
    };

    return Game;
});
