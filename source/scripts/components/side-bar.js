/*global require, module*/

const React = require('react');
const ReactDom = require('react-dom');
const Superagent = require('superagent');
const Popup = require('react-popup').default;
const Settings = require('../settings');
const Logotype = require('../components/logotype');

const SideBar = React.createClass({

    displayName: 'SideBar',

    propTypes: {
        game: React.PropTypes.object.isRequired
    },
    
    componentDidMount: function () {
        if (!document.getElementById('popupContainer')) {
            const popupContainer = document.createElement('div');
            
            popupContainer.id = 'popupContainer';
            
            document.body.appendChild(popupContainer);
        
            ReactDom.render(<Popup/>, popupContainer);
        }
    },

    onButtonClick: function(message, page, event) {
        event.preventDefault();
        
        var getNewGameId = () => {
            this.props.game.getGameId()
                .then(() => {
                    location.href=page;
                });
        };
        
        if (this.props.game.gameWasStarted === true) {
            Popup.create({
                content: message,
                buttons: {
                    left: [{
                        text: 'нет',
                        action: (popup) => {
                            popup.close();
                        }
                    }],
                    right: [{
                        text: 'да',
                        action: (popup) => {
                            if (page === "#/e-city"){
                                getNewGameId();
                                this.props.game.onChangeGameId();
                            } else {
                                location.href=page;
                            }
                            this.props.game.changeGameWasStarted(false);
                            popup.close();
                        }
                    }]
                }
            });
        } else if (page === "#/e-city"){
            getNewGameId();
        } else {
            location.href=page;
        }
    },
    
    continueClick: function (event) {
            this.props.game.changeGameWasStarted(true);
    },
        
    render: function () {
        
        var popupMessageNewGame = 'Ваша игра еще не закончена. Вы уверены, что хотите начать новую игру?';
        var popupMessageOthers = 'При переходе на другую страницу Ваша игра будет закончена. Вы уверены, что хотите закончить игру?';
        var popupMessageExit = 'Ваша игра будет закончена. Вы уверены, что хотите выйти?';
        
        return (
            <div className="side-bar bg-color">
                <Logotype/>
                <div>
                    <a className='text-control-color' href='#' onClick={this.onButtonClick.bind(this, popupMessageNewGame, "#/e-city")}>Новая игра</a>
                </div>
                <div>
                    <a className={this.props.game.continueButtonPointerEvents ? 'grey-color' : 'text-control-color'} href="#/e-city" onClick={this.continueClick} style={{pointerEvents:this.props.game.continueButtonPointerEvents}}>Продолжить</a>
                </div>
                <div>
                    <a className='text-control-color' href="#" onClick={this.onButtonClick.bind(this, popupMessageOthers, "#/records")}>Рекорды</a>
                </div>
                <div>
                    <a className='text-control-color' href="#" onClick={this.onButtonClick.bind(this, popupMessageOthers, "#/rules")}>Правила</a>
                </div>
                <div>
                    <a className='text-control-color' href="#" onClick={this.onButtonClick.bind(this, popupMessageOthers, "#/library")}>Библиотека</a>
                </div>
                <div>
                    <a className='text-control-color' href="#" onClick={this.onButtonClick.bind(this, popupMessageOthers, "#/team")}>Команда</a>
                </div>
                <div>
                    <a className='text-control-color' href="#" onClick={this.onButtonClick.bind(this,  popupMessageExit, "#/before-start")}>Выход</a>
                </div>
                <div>
                </div>
            </div>
        );
    }

});

module.exports = SideBar;
