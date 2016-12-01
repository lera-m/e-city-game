define(['react', 'superagent', '../components/map-svg', '../settings'], function (React, Superagent, MapSvg, Settings) {
    
    return React.createClass ({
        
        displayName: 'PlayGame',
        
        getInitialState: function () {
            return {
                city: '',
                inputLetter: '',
                warningMessage: '',
                regionId: null
            };
        },
        
        onButtonClick: function (event) {
            this.setState({
                        warningMessage: ''
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
                        
                        while (letter === 'й' || letter === 'ы' || letter === 'ь' || letter === 'ъ' || letter === 'ц'){
                            i++;
                            letter = name[name.length - i];
                        }
                        letter = letter.toUpperCase();
                        
                        state.city = letter;
                        state.inputLetter = letter;
                        state.regionId = response.body.city.regionId;
//                         this.props.onAddCity(this.state.city);
                        this.props.onAddCity(response.body.city);
                    }
                    if (response.body.gameStatus.code !== 0){
                        state.city =  this.state.inputLetter;
                    }
                    var message = '';
                    switch (response.body.gameStatus.code) {
                        case 10:
                            message = 'Такого города нет в базе';
                            break;
                        case 12:
                            message = 'Город начинается с неправильной буквы';
                            break;
                        case 11:
                            message = 'Город уже был использован';
                            break;
                        default:
                            message = '';
                            break;
                    }
                    state.warningMessage = message;
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
                        <button className='giveUp buttonStyle bg-color'>Сдаться</button>
                        </div>
                    </div>
                    <div className='warningMessage'>
                        {this.state.warningMessage}
                    </div>
                    <MapSvg regionId={this.state.regionId}/>
                </div>
            );
        }
        
    });
    
});