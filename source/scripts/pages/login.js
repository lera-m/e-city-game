define(['react'], function (React) {

    return React.createClass({

        displayName: 'Login',

        render: function () {
            return (
                <div className="login">
                    <div className="logo">
                        E-City
                    </div>
                    <div>
                        <input type="text" placeholder="Login"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox"/>
                        Remember me
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                    <div>
                        <a href="#">New Player</a>
                    </div>
                    <div>
                        <a href="#/e-city">Start</a>
                    </div>
                </div>

            );
        }
    });

});
