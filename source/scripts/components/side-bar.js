define(['react', 'superagent', '../settings'], function (React,  Superagent, Settings) {
    
    return React.createClass ({
        
        displayName: 'SideBar',
        
        propTypes: {
            game: React.PropTypes.object.isRequired
        },
        
        onButtonClick: function(event) {
            this.props.game.getGameId()
                .then(() => {
                });

        },
        
        render: function () {
            return (
                <div className="side-bar bg-color">
                    <div className="logo">
                        <p>E-City</p>
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