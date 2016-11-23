define(['react', 'superagent', '../settings'], function (React,  Superagent, Settings) {
    
    return React.createClass ({
        
        displayName: 'SideBar',
        
        onButtonClick: function(event) {
            this.props.game.getGameId()
                .then(function(){
                    console.log(this.state.game.gameId);
                });

        },
        
        render: function () {
            return (
                <div className="side-bar">
                    <div className="logo">
                        E-City
                    </div>
                    <div>
                        <a href="#/e-city" onClick={this.onButtonClick}>Новая игра</a>
                    </div>
                    <div>
                        <a className='grey-color' href="#">Продолжить</a>
                    </div>
                    <div>
                        <a href="#/e-city">Рекорды</a>
                    </div>
                    <div>
                        <a href="#/rules">Правила</a>
                    </div>
                    <div>
                        <a href="#/library">Библиотека</a>
                    </div>
                    <div>
                        <a href="#/before-start">Выход</a>
                    </div>
                    <div>
                    </div>
                </div>
            );
        }
        
    });
    
});