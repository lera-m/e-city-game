define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'BeforeStart',
        
        render: function () {
            return (
                <div className="before-start">
                    <div className="logo">
                        E-City
                    </div>
                    <div>
                        <a href="#/e-city">New Game</a>
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