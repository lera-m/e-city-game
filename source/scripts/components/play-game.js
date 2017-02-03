define(['react', 'superagent', '../components/map-svg', '../settings', '../components/timer', '../components/timer-placeholder'], function (React, Superagent, MapSvg, Settings, Timer, TimerPlaceholder) {

    return React.createClass ({

        displayName: 'PlayGame',

        getInitialState: function () {
            return {
                city: this.props.game.lastLetterGameHistory,
                inputLetter: '',
                warningMessage: '',
                winnerMessage: '',
                regionId: this.props.game.regionId,
                regionClientId: null,
                disabled: false,
                showTimer: 0,
                topPosition: this.props.game.topPosition,
                leftPosition: this.props.game.leftPosition,
                cityName: this.props.game.cityName 
            };
        },
        
        componentWillMount: function (){
            if (this.state.city){
                this.setState({
                    showTimer: 1
                });
            }
        },
        
        componentDidMount: function () {
            this.props.game.onChangeGameId(this.onChangeGameId);
        },

        componentWillUnmount: function () {
            this.props.game.offChangeGameId(this.onChangeGameId);
            this.props.game.changeGameWasStarted(false);
        },

        onChangeGameId: function (gameId) {
            this.setState({
                city: '',
                inputLetter: '',
                warningMessage: '',
                winnerMessage: '',
                regionId: null,
                disabled: false,
                showTimer: 0,
                topPosition: null,
                leftPosition: null,
                cityName: '' 
            });
        },

        onTimeout: function () {
            if (this.props.game.gameWasStarted === true){
                 this.props.game.timeOut()
                    .then(code => {
                        if (code === 22){
                            this.setState({
                                showTimer: 0,
                                disabled: true,
                                warningMessage: 'ВРЕМЯ ВЫШЛО'
                            })
                        }
                    })
                    .fail(error => {
                         
                    });
            }
            
        },

        onFormSubmit: function (event) {
            event.preventDefault();
            
            this.setState({
                        warningMessage: ''
                    });
            Superagent
                .post(Settings.host + Settings.api + '/game/move')
                .type('form')
                .set('Accept', 'application/json')
                .send({
                    game_id: this.props.game.gameId,
                    city_name: this.state.city
                })
                .end((error, response) => {
console.log(response);
                    var state = {};
                    
                    response.body = JSON.parse(response.text);
                    
                    if (response.body.cityClient){
                        this.props.onAddCity(response.body.cityClient);
                        state.regionClientId = response.body.cityClient.regionId;
                    }
                    
                    if (response.body.city){
                        
                        if (this.props.game.gameWasStarted === false){
                            this.props.game.changeGameWasStarted(true);
                        }
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
                        state.showTimer = this.state.showTimer + 1;
                        state.topPosition = response.body.city.x;
                        state.leftPosition = response.body.city.y;
                        state.cityName = response.body.city.name;

                        this.props.onAddCity(response.body.city);
                    }
                    
                    if (response.body.gameStatus.code !== 0){
                        state.city =  this.state.inputLetter;
                    }
                    var warningMessage = '';
                    var winnerMessage = '';
                    switch (response.body.gameStatus.code) {
                        case 1:
                        case 2:
                            warningMessage = 'Эта игра уже окончена. Начните новую игру';
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
                            winnerMessage = 'Поздравляем! Вы победили! Сыграйте снова!';
                            state.inputLetter = '';
                            state.disabled = true;
                            state.showTimer = 0;
                            state.city = '';
                            this.props.game.changeGameWasStarted(false);
                            break;
                        case 21:
                            winnerMessage = 'Вы проиграли. Попробуйте еще раз.';
                            state.disabled = true;
                            state.showTimer = 0;
                            this.props.game.changeGameWasStarted(false);
                            break;
                        default:
                            winnerMessage = '';
                            warningMessage = '';
                            break;
                    }
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
        
        giveUpButton: function(){
            
            if (this.props.game.gameWasStarted === true){
                 this.props.game.giveUp()
                    .then(code => {
                        if (code === 21){
                            this.setState ({
                                winnerMessage: 'Вы проиграли. Попробуйте еще раз.',
                                disabled: true,
                                showTimer: 0,
                                inputLetter: '',
                                city: ''
                            });
                        }
                    })
                    .fail(error => {
                         
                    });
            }
        },
        
        render: function () {
            return (
                <div className="play-game">
                    {this.state.showTimer > 0 ? (
                        <Timer key={'timer_' + this.state.showTimer} time={60} onTimeout={this.onTimeout}/>
                    ) : (
                        <TimerPlaceholder/>
                    )}
                    <form className='playField' onSubmit={this.onFormSubmit}>
                        <div>
                            <input className='city buttonStyle' type="text" value={this.state.city} onChange={this.onInputChange} placeholder="Введите город" disabled={this.state.disabled}/>
                        </div>
                        <div>
                            <button type='submit' className='send buttonStyle'>Отправить</button>
                        </div>
                        <div>
                            <button type='button' className='giveUp buttonStyle bg-color text-color-yellow' onClick={this.giveUpButton}>Сдаться</button>
                        </div>
                    </form>
                    <div className='warning_message'>
                        {this.state.warningMessage}
                    </div>
                    <div className='winner-message'>
                        {this.state.winnerMessage}
                    </div>
                    <MapSvg regionId={this.state.regionId} regionClientId={this.state.regionClientId} topPosition={this.state.topPosition} leftPosition={this.state.leftPosition} cityName={this.state.cityName}/>
                </div>
            );
        }

    });

});
