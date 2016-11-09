define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {

    return React.createClass({

        displayName: 'Login',
        
        onButtonClick: function (event) {
            Superagent
                //.get('http://ecity.org.ua:8080/user/hello')
                .get(Settings.host + Settings.api + '/user/hello')
                .set('Accept', 'application/json')
                .auth('user', 'password', {type:'auto'})
                .end((error, response) => /* arrow function */{
                    console.log(error, response);
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
                        <input type="submit" onClick={this.onButtonClick} value="Submit"/>
                    </div>
                    <div>
                        <a href="#">New Player</a>
                    </div>
                    <div>
                        <a href="#/before-start">Start</a>
                    </div>
                </div>

            );
        }
    });

});
