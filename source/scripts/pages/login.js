define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {

    return React.createClass({

        displayName: 'Login',
        
        onButtonClick: function (event) {
            this.props.game.logIn('user', 'password')
                .then(function(){
                    location.href = '#/before-start';
                    console.log('ok');
                })
                .fail(function(){
                    console.log('not ok');
                });
        },
        
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
                        <input type="submit" onClick={this.onButtonClick} value="Log In"/>
                    </div>
                    <div>
                        <a href="#">New Player</a>
                    </div>
                    <div>
                    </div>
                </div>

            );
        }
    });

});
