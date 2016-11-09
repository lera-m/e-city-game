define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {
    
    return React.createClass ({
        
        displayName: 'BeforeStart',
        
        getInitialState: function () {
            return {
                id: 0
            };
        },
        
        onButtonClick: function (event) {
            Superagent
                .get(Settings.host + Settings.api + '/game/new')
                //.set('Accept', 'application/json')
                .end((error, response) => /* arrow function */{
                    console.log(error, response);
                });
        },
        
        render: function () {
            return (
                <div className="before-start">
                    <div className="logo">
                        E-City
                    </div>
                    <div>
                        <a href="#/e-city" onClick={this.onButtonClick}>New Game</a>
                    </div>
                    <div>
                        <a href="#">Continue</a>
                    </div>
                    <div>
                        <a href="#/rules">Rules</a>
                    </div>
                    <div>
                        <a href="#/library">Library</a>
                    </div>
                    <div>
                        <a href="#/login">Exit</a>
                    </div>
                </div>
            );
        }
        
    });
    
});