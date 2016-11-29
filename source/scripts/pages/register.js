define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {

    return React.createClass({

        displayName: 'Register',
        
        onButtonClick: function (event) {
/*
            this.props.game.logIn('user', 'password')
                .then(function(){
                    location.href = '#/before-start';
                    console.log('ok');
                })
                .fail(function(){
                    console.log('not ok');
                });
*/
        },
        
        render: function () {
            return (
                <div>
                    <div>
                        <img src="/img/bg.png" className="bg-layer-1" alt=""/>
                    </div>
                    <div className="register bg-color">
                        <div className="logo">
                            <p>E-City</p>
                        </div>
                        <div>
                            <input type="text" className='register_input_style' placeholder="Логин"/>
                        </div>
                        <div>
                            <input type="password" className='register_input_style' placeholder="Пароль"/>
                        </div>
                        <div>
                            <input type="email" className='register_input_style' placeholder="Email"/>
                        </div>
                        <div>
                            <input type="text" className='register_input_style' placeholder="Имя(опционально)"/>
                        </div>
                        <div>
                            <input type="text" className='register_input_style' placeholder="Фамилия(опционально)"/>
                        </div>
                        <div>
                            <input type="text" className='register_input_style' placeholder="Город(опционально)"/>
                        </div>
                        <div>
                            <input type="submit" className='register_submit' onClick={this.onButtonClick} value="Зарегистрироваться"/>
                        </div>
                    </div>
                </div>  
            );
        }
    });

});
