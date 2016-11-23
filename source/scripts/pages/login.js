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
                <div>
                    <div className="bg-layer-1">
                        <div className="bg-layer-2"/>
                    </div>
                    <div className="login">
                        <div className="logo">
                            <p>E-City</p>
                        </div>
                        <div>
                            <input type="text" placeholder="Логин"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Пароль"/>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox"/>
                            Запомнить меня
                        </div>
                        <div className="vorgetPassword">
                            <a href='#'>Забыли пароль?</a>
                        </div>
                        <div>
                            <input type="submit" onClick={this.onButtonClick} value="Войти"/>
                        </div>
                        <div className='social'>
                            <p>Войти при помощи</p>
                            <div>
                                <input type='image' src='../img/vk.png'/>
                                <input type='image' src='../img/facebook.png'/>
                                <input type='image' src='../img/insta.png'/>
                            </div>
                        </div>
                    </div>
                </div>  
            );
        }
    });

});
