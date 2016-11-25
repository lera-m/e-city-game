define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {
    
    return React.createClass ({
        
        displayName: 'BeforeStart',
        
        
        onButtonClick: function (event) {
            this.props.game.getGameId()
                .then(function(){
                });

        },
        
        onLogOut: function(){
            this.props.game.logOut();
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
                        <a href="#/login" onClick={this.onLogOut}>Log Out</a>
                    </div>
                </div>
            );
        }
        
    });
    
});