define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {
    
    return React.createClass ({
        
        displayName: 'BeforeStart',
        
        
        onButtonClick: function (event) {
            this.props.game.getGameId()
                .then(function(){
                });

        },
        
        onLogOut: function(){
            this.props.game.logOut();
        },
        
        render: function () {
            return (
                    <div>
                        <div>
                            <img src="/img/bg.png" className="bg-layer-1" alt=""/>
                        </div>
                        <div className="before-start bg-color">
                            <div className="logo">
                                <p>E-City</p>
                            </div>
                            <div>
                                <a className='text-color-yellow' href="#/e-city" onClick={this.onButtonClick}>Новая игра</a>
                            </div>
                            <div>
                                <a href="#/e-city" className='grey-color'>Продолжить</a>
                            </div>
                            <div>
                                <a className='text-color-yellow' href="#/rules">Правила</a>
                            </div>
                            <div>
                                <a className='text-color-yellow' href="#/library">Библиотека</a>
                            </div>
                            <div>
                                <a className='text-color-yellow' href="#/login" onClick={this.onLogOut}>Выход</a>
                            </div>
                        </div>
                    </div>
            );
        }
        
    });
    
});