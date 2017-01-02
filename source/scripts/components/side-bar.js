define(['react', 'superagent', '../settings', 'react-popup'], function (React,  Superagent, Settings, Popup) {
    
    return React.createClass ({
        
        displayName: 'SideBar',
        
        propTypes: {
            game: React.PropTypes.object.isRequired
        },
        
/*
        onButtonClick: function(event) {
            Popup.create({
                content: 'Вы уверены, что хотите начать новую игру?',
                buttons: {
                    left: ['нет'],
                    right: [{
                        text: 'да',
                        action: function(popup){
                            this.props.game.getGameId()
                                .then(() => {
                                    location.href="#/e-city";
                                });
                            popup.close();
                        }
                    }]
                },
            });
*/
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
                        <a className='text-control-color' href='#/e-city' onClick={this.onButtonClick}>Новая игра</a>
                    </div>
                    <div>
                        <a className='grey-color' href="#">Продолжить</a>
                    </div>
                    <div>
                        <a className='text-control-color' href="#/e-city">Рекорды</a>
                    </div>
                    <div>
                        <a className='text-control-color' href="#/rules">Правила</a>
                    </div>
                    <div>
                        <a className='text-control-color' href="#/library">Библиотека</a>
                    </div>
                    <div>
                        <a className='text-control-color' href="#/before-start">Выход</a>
                    </div>
                    <div>
                    </div>
                </div>
            );
        }
        
    });
    
});