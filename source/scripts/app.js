define(['react', 'react-dom', 'react-router', 'q', './pages/login', './pages/e-city', './pages/rules', './pages/library', './pages/before-start', './controller/game', './pages/register', './pages/page404'], function (React, ReactDom, ReactRouter, Q, Login, Ecity, Rules, Library, BeforeStart, Game, Register, Page404) {

    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var hashHistory = ReactRouter.hashHistory;
    
    var props = {
        game: new Game()
    };
    
    var getComponent = function(page){
        return function(route){
            var defer = Q.defer();
            
            defer.resolve(function(){
                return {
                    render: function(){
                        return React.createElement(page, props);
                    }
                };
            });
            
            return defer.promise;  
        };
    };
        
    var requireLogIn = function(nextState, replace, callback){
        if(!props.game.isLoggedIn()){
            replace('/login');
        }
        callback();
    };
    
    var Page = React.createClass({

        displayName: 'Page',

        render: function () {
            return (
                <Router history={hashHistory}>
                    <Route path="/" getComponent={getComponent(Login)}/>
                    <Route path="/login" getComponent={getComponent(Login)}/>
                    <Route path="/e-city" getComponent={getComponent(Ecity)} onEnter={requireLogIn}/>
                    <Route path="/e-city/:name" getComponent={getComponent(Ecity)} onEnter={requireLogIn}/>
                    <Route path="/rules" getComponent={getComponent(Rules)} onEnter={requireLogIn}/>
                    <Route path="/library" getComponent={getComponent(Library)} onEnter={requireLogIn}/>
                    <Route path="/before-start" getComponent={getComponent(BeforeStart)} onEnter={requireLogIn}/>
                    <Route path="/register" getComponent={getComponent(Register)}/>
                    <Route path="*" getComponent={getComponent(Page404)}/>
                </Router>
            );
        }
    });

    Page = React.createFactory(Page);

    ReactDom.render(new Page(), document.getElementById('page'));
});
