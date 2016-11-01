define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'Side-Bar',
        
        render: function () {
            return (
                <div className="side-bar">
                    <div className="logo">
                        E-City
                    </div>
                    <div>
                        <a href="#">New Game</a>
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
                    </div>
                </div>
            );
        }
        
    });
    
});