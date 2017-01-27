define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {

    return React.createClass({

        displayName: 'Login',

        getInitialState: function () {
            return {
                login: null,
                password: null,
                warningMessage: ''
            };
        },

        componentDidMount: function () {
            if(localStorage.getItem('userLoggedIn') === 'true'){
                this.props.game.setLogIn()
                    .then(function(){
                        location.href = '#/before-start';
console.log('loged in');
                    })
                    .fail(function(){
console.log('not loged in');
                    }); 
            } 
/*
            this.props.game.getGameStatus()
                .then(function(){
                    location.href = '#/before-start';
                    console.log('loged in');
                })
                .fail(function(){
                    console.log('not loged in');
                });
*/
        },

        onInputChange: function (target, event) {
            var value =  event.target.value;

            this.setState({
                [target]: value
            });
        },

        onFormSubmit: function (event) {
            event.preventDefault();
            var user = this.state.login;
            var password = this.state.password;
            
/*
            var user = 'user2';
            var password = 'password1';
*/

            if (user && password){
                this.props.game.logIn(user, password)
                    .then(function(){
                        location.href = '#/before-start';
                        console.log('ok');
                    })
                    .fail(() => {
                        this.setState({
                            warningMessage: 'незарегистрированный пользователь'
                        });
                        console.log('not ok');
                    });
            }
            
        },

        render: function () {
            return (
                <div>
                    <div>
                        <img src="/img/bg.png" className="bg-layer-1" alt=""/>
                    </div>
                    <div className="login bg-color">
                        <div className="logo">
                            <p>E-City</p>
                        </div>
                        <form onSubmit={this.onFormSubmit}>
                            <div>
                                <input type="text" className='login_input_style' placeholder="Логин" onChange={this.onInputChange.bind(this, 'login')}/>
                            </div>
                            <div>
                                <input type="password" className='login_input_style' placeholder="Пароль" onChange={this.onInputChange.bind(this, 'password')}/>
                            </div>
                            <div className='warning-message'>
                                {this.state.warningMessage}
                            </div>
                            <div className="checkbox">
                                <input type="checkbox"/>
                                Запомнить меня
                            </div>
                            <div className="login_register">
                                <a href="#/register" className='text-control-color'>Зарегистрироваться</a>
                            </div>
                            <div className="vorgetPassword">
                                <a href='#' className='text-control-color'>Забыли пароль?</a>
                            </div>
                            <div>
                                <input type="submit" className='login_submit' value="Войти"/>
                            </div>
                        </form>
                        <div className='social text-control-color'>
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
