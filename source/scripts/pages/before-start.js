define(['react', 'superagent', '../settings', '../components/logotype'], function (React, Superagent, Settings, Logotype) {
    
    return React.createClass ({
        
        displayName: 'BeforeStart',
        
        getInitialState: function(){
            return {
                pointerEvents: this.props.game.continueButtonPointerEvents,
            };  
        },
        
        componentWillMount: function(){
            this.props.game.getGameStatus()
                .then(response => {
                    if(response.id){
                        this.setState ({
                            pointerEvents: ''
                        });
                        this.props.game.getGameHistory();
                    }
                })
                .fail(function(error){
console.log(error);
                    sessionStorage.setItem('userLoggedIn', 'false');
                    location.href = '#/login';
                });  
        },
        
        onButtonClick: function (event) {
            this.props.game.getGameId()
                .then(function(){
                });

        },
        
        continueClick: function (event) {
            this.props.game.changeGameWasStarted(true);
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
                            <Logotype/>
                            <div>
                                <a className='text-control-color' href="#/e-city" onClick={this.onButtonClick}>Новая игра</a>
                            </div>
                            <div>
                                <a href="#/e-city" className={this.state.pointerEvents ? 'grey-color' : 'text-control-color'} style={{pointerEvents:this.state.pointerEvents}} onClick={this.continueClick}>Продолжить</a>
                            </div>
                            <div>
                                <a className='text-control-color' href="#/records">Рекорды</a>
                            </div>
                            <div>
                                <a className='text-control-color' href="#/rules">Правила</a>
                            </div>
                            <div>
                                <a className='text-control-color' href="#/library">Библиотека</a>
                            </div>
                            <div>
                                <a className='text-control-color' href="#/login" onClick={this.onLogOut}>Выход</a>
                            </div>
                        </div>
                    </div>
            );
        }
        
    });
    
});