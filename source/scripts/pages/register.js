define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {

    return React.createClass({

        displayName: 'Register',
        
        getInitialState: function () {
            return {
                login: '',
                password: '',
                email: '',
                name: '',
                surname: '',
                city: '',
                warningMessage: ''
            };
        },

        
        onInputChange: function (target, event) {
            var value =  event.target.value;
            
            this.setState({
                        [target]: value
            });
        },
        
        emailValidation: function(email){
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".") || false;
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length || dotpos === false) {
                this.setState({
                        email: false,
                        warningMessage: 'Недействительный email'
                });
            } else {
                return email;
            }
        },
        
        onFormSubmit: function (event) {
            var login = this.state.login,
            password = this.state.password,
            email =  this.emailValidation(this.state.email),
            name = this.state.name.slice(0, 1).toUpperCase() + this.state.name.slice(1),
            surname = this.state.surname.slice(0, 1).toUpperCase() + this.state.surname.slice(1),
            city = this.state.city.slice(0, 1).toUpperCase() + this.state.city.slice(1),
            state = {};
            
            if (!login || !password){
                        state.warningMessage = 'Заполните все обязательные поля'
            } else if (login && password && email) {
                
                Superagent
                    .post(Settings.host + Settings.api + '/register')
                    .set('Accept', 'application/json')
                    .type('form')
                    .send({
                        login: login,
                        password: password,
                        email: email,
                        firstName: name,
                        lastName: surname,
                        cityLive: city
                    })
                    .end((error, response) => {
                        console.log(error, response);
                        switch (response.body.code) {
                            case 31:
                                location.href = '#/login';
                                console.log(31);
                                break;
                            case 32:
                                console.log(32);
                                state.warningMessage = 'Игрок с таким именем уже существует';
                                break;
                            default:
                                break;
                        }
                        this.setState(state);
                    });
                
            } else {
                console.log('not ok');
            }
            this.setState(state);
            
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
                        <form onSubmit={this.onFormSubmit}>
                            <div>
                                <input type="text" className='register_input_style' placeholder="Логин" onChange={this.onInputChange.bind(this, 'login')}/>
                            </div>
                            <div>
                                <input type="password" className='register_input_style' placeholder="Пароль" onChange={this.onInputChange.bind(this, 'password')}/>
                            </div>
                            <div>
                                <input type="email" className='register_input_style' placeholder="Email" onChange={this.onInputChange.bind(this, 'email')}/>
                            </div>
                            <div>
                                <input type="text" className='register_input_style' placeholder="Имя(опционально)" onChange={this.onInputChange.bind(this, 'name')}/>
                            </div>
                            <div>
                                <input type="text" className='register_input_style' placeholder="Фамилия(опционально)" onChange={this.onInputChange.bind(this, 'surname')}/>
                            </div>
                            <div>
                                <input type="text" className='register_input_style' placeholder="Город(опционально)"onChange={this.onInputChange.bind(this, 'city')}/>
                            </div>
                            <div className='warning-message'>
                                {this.state.warningMessage}
                            </div>
                            <div>
                                <input type="submit" className='register_submit' value="Зарегистрироваться"/>
                            </div>
                        </form>
                    </div>
                </div>  
            );
        }
    });

});
