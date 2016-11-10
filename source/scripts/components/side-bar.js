define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {
    
    return React.createClass ({
        
        displayName: 'SideBar',
        
         onButtonClick: function (event) {
            Superagent
                .get(Settings.host + Settings.api + '/game/new')
                .set('Accept', 'application/json')
                .end((error, response) => /* arrow function */{
                    var id = JSON.parse(response.text).id;
                    console.log(id);
                });
        },
        
        render: function () {
            return (
                <div className="side-bar">
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
                        <a href="#/before-start">Exit</a>
                    </div>
                    <div>
                    </div>
                </div>
            );
        }
        
    });
    
});