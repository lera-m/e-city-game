/*global require, module*/

const React = require('react');
const ReactDom = require('react-dom');
const Superagent = require('superagent');
const Popup = require('react-popup').default;
const Settings = require('../settings');

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

    onButtonClick: function(event) {
        event.preventDefault();
        
        if (this.props.game.gameWasStarted === true) {
            Popup.create({
                content: 'Ваша игра еще не закончена. Вы уверены, что хотите начать новую игру?',
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
                            this.props.game.getGameId()
                                .then(() => {
                                    location.href="#/e-city";
                                });
                            this.props.game.changeGameWasStarted(false);
                            popup.close();
                        }
                    }]
                }
            });
        } else {
            this.props.game.getGameId()
                .then(() => {
                    location.href="#/e-city";
                });
            this.props.game.changeGameWasStarted(false);
        }
    },
    
    onLibraryClick: function (event){
        event.preventDefault();
        
        if (this.props.game.gameWasStarted === true) {
            Popup.create({
                content: 'При переходе в библиотеку Ваша игра будет закончена. Вы уверены, что хотите закончить игру?',
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
                            this.props.game.getGameId()
                                .then(() => {
                                    location.href="#/library";
                                });
                            this.props.game.changeGameWasStarted(false);
                            popup.close();
                        }
                    }]
                }
            });
        } else {
            this.props.game.getGameId()
                .then(() => {
                    location.href="#/library";
                });
            this.props.game.changeGameWasStarted(false);
        }
    },
    
    render: function () {
        return (
            <div className="side-bar bg-color">
                <div className="logo">
                    <p>E-City</p>
                </div>
                <div>
                    <a className='text-control-color' href='#' onClick={this.onButtonClick}>Новая игра</a>
                </div>
                <div>
                    <a className='grey-color' href="#/e-city">Продолжить</a>
                </div>
                <div>
                    <a className='text-control-color' href="#">Рекорды</a>
                </div>
                <div>
                    <a className='text-control-color' href="#/rules">Правила</a>
                </div>
                <div>
                    <a className='text-control-color' href="#" onClick={this.onLibraryClick}>Библиотека</a>
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

module.exports = SideBar;
