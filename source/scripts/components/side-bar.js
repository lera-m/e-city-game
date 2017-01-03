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
        
        Popup.create({
            content: 'Вы уверены, что хотите начать новую игру?',
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
                                console.log('popup action');
                                location.href="#/e-city";
                            });
                        popup.close();
                    }
                }]
            }
        });
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

module.exports = SideBar;
