define(['react', 'superagent', '../components/map-svg', '../settings'], function (React, Superagent, MapSvg, Settings) {
    
    return React.createClass ({
        
        displayName: 'PlayGame',
        
        getInitialState: function () {
            return {
                city: '',
                inputLetter: '',
                warningMessage: '',
                winnerMessage: '',
                regionId: null,
                disabled: null
            };
        },
        
        onButtonClick: function (event) {
            this.setState({
                        warningMessage: '',
                    });
            console.log(this.state.city);
            console.log(this.props.game.gameId);
            Superagent
                .post(Settings.host + Settings.api + '/game/move')
                .type('form')
                .set('Accept', 'application/json')
                .send({
                    game_id: this.props.game.gameId,
                    city_name: this.state.city
                })
                .end((error, response) => /* arrow function */{
                    console.log(response);
                    var state = {};
                    
                    response.body = JSON.parse(response.text);
                    
                    if (response.body.city){
                        var name = response.body.city.name;
                        var i = 1;
                        var letter = name[name.length - i];
                        
                        while (letter === 'й' || letter === 'ы' || letter === 'ь' || letter === 'ъ' || letter === 'ц' || letter === ' '){
                            i++;
                            letter = name[name.length - i];
                        }
                        letter = letter.toUpperCase();
                        
                        state.city = letter;
                        state.inputLetter = letter;
                        state.regionId = response.body.city.regionId;
                        
                        this.props.onAddCity(response.body.cityClient);
                        this.props.onAddCity(response.body.city);
                    }
                    if (response.body.gameStatus.code !== 0){
                        state.city =  this.state.inputLetter;
                    }
                    var warningMessage = '';
                    var winnerMessage = '';
                    switch (response.body.gameStatus.code) {
                        case 2:
                            warningMessage = 'Игра закончена. Начните новую игру';
                            state.disabled = true;
                            break;
                        case 10:
                            warningMessage = 'Такого города нет в базе';
                            break;
                        case 12:
                            warningMessage = 'Город начинается с неправильной буквы';
                            break;
                        case 11:
                            warningMessage = 'Город уже был использован';
                            break;
                        case 20:
                            winnerMessage = 'Поздравляем! Вы победили! Сыгрыйте снова!';
                            state.disabled = true;
                            break;
                        case 21:
                            winnerMessage = 'Вы проиграли. Попробуйте еще раз.';
                            state.disabled = true;
                            break;
                        default:
                            winnerMessage = '';
                            warningMessage = '';
                            break;
                    }
                    console.log(winnerMessage);
                    state.winnerMessage = winnerMessage
                    state.warningMessage = warningMessage;
                    this.setState (state);
                });
        },
        
        onInputChange: function (event) {
            var city = event.target.value;
            city = city.slice(0, 1).toUpperCase() + city.slice(1);
                        
            if (this.state.inputLetter && city[0] !== this.state.inputLetter){
                city = this.state.inputLetter;
            }
            
            this.setState({
                city: city
            });
        },
        
        render: function () {
            return (
                <div className="play-game">
                    <div className='score'>
                        <div className="first-number counter"><p>6</p></div>
                        <div className="second-number counter"><p>0</p></div>
                    </div>
                    <div className='playField'>
                        <div>
                        <input className='city buttonStyle' type="text" value={this.state.city} onChange={this.onInputChange} placeholder="Введите город"/>
                        </div>
                        <div>
                        <button className='send buttonStyle'onClick={this.onButtonClick}>Отправить</button>
                        </div>
                        <div>
                        <button className='giveUp buttonStyle bg-color text-color-yellow'>Сдаться</button>
                        </div>
                    </div>
                    <div className='warning-message'>
                        {this.state.warningMessage}
                    </div>
                    <div className='winner-message'>
                        {this.state.winnerMessage}
                    </div>
                    <MapSvg regionId={this.state.regionId}/>
                </div>
            );
        }
        
    });
    
});