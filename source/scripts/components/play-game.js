define(['react', 'superagent', '../components/map-svg', '../settings', '../components/timer', '../components/timer-placeholder'], function (React, Superagent, MapSvg, Settings, Timer, TimerPlaceholder) {

    return React.createClass ({

        displayName: 'PlayGame',

        getInitialState: function () {
            return {
                city: '',
                inputLetter: '',
                warningMessage: '',
                winnerMessage: '',
                regionId: null,
                regionClientId: null,
                disabled: false,
                showTimer: 0 
            };
        },

        componentDidMount: function () {
            this.props.game.onChangeGameId(this.onChangeGameId);
        },

        componentWillUnmount: function () {
            this.props.game.offChangeGameId(this.onChangeGameId);
        },

        onChangeGameId: function (gameId) {
            this.setState({
                city: '',
                inputLetter: '',
                warningMessage: '',
                winnerMessage: '',
                regionId: null,
                disabled: false,
                showTimer: 0
            });
        },

        onTimeout: function () {
            this.setState({
                showTimer: 0,
                disabled: true,
                warningMessage: 'ВРЕМЯ ВЫШЛО'
            });
        },

        onFormSubmit: function (event) {
            event.preventDefault();
            
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
                .end((error, response) => {
                    console.log(response);
                    var state = {};

                    response.body = JSON.parse(response.text);
                    
                    if (response.body.cityClient){
                        this.props.onAddCity(response.body.cityClient);
                        state.regionClientId = response.body.cityClient.regionId;
                    }
                    
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
                        state.showTimer = this.state.showTimer + 1;

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
                            winnerMessage = 'Поздравляем! Вы победили! Сыграйте снова!';
                            state.inputLetter = '';
                            state.disabled = true;
                            state.showTimer = 0;
                            state.city = '';
                            break;
                        case 21:
                            winnerMessage = 'Вы проиграли. Попробуйте еще раз.';
                            state.disabled = true;
                            state.showTimer = 0;
                            break;
                        default:
                            winnerMessage = '';
                            warningMessage = '';
                            break;
                    }
                    state.winnerMessage = winnerMessage
                    state.warningMessage = warningMessage;
                    this.setState (state);
                    console.log(this.state.inputLetter);
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
                            <button type='button' className='giveUp buttonStyle bg-color text-color-yellow'>Сдаться</button>
                        </div>
                    </form>
                    <div className='warning_message'>
                        {this.state.warningMessage}
                    </div>
                    <div className='winner-message'>
                        {this.state.winnerMessage}
                    </div>
                    <MapSvg regionId={this.state.regionId} regionClientId={this.state.regionClientId}/>
                </div>
            );
        }

    });

});
