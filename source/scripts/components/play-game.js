define(['react', 'superagent', '../components/map-svg', '../settings'], function (React, Superagent, MapSvg, Settings) {
    
    return React.createClass ({
        
        displayName: 'PlayGame',
        
        getInitialState: function () {
            return {
                city: '',
                inputLetter: ''
            };
        },
        
        onButtonClick: function (event) {
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
                    if (JSON.parse(response.text).city){
                        var name = JSON.parse(response.text).city.name;
                        var i = 1;
                        var letter = name[name.length - i];
                        
                        while (letter === 'й' || letter === 'ы' || letter === 'ь' || letter === 'ъ' || letter === 'ц'){
                            i++;
                            letter = name[name.length - i];
                        }
                        letter = letter.toUpperCase();
                        
                        this.setState({
                            city: letter,
                            inputLetter: letter
                        });
//                         this.props.onAddCity(this.state.city);
                        this.props.onAddCity(JSON.parse(response.text).city);
                    }
                });
        },
        
        onInputChange: function (event) {
            var city = event.target.value;
            city = city.slice(0, 1).toUpperCase() + city.slice(1);
            
/*
            if (city.split('-').length > 1 || city.split(' ').length > 1){
                
            }
*/
            
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
                    <MapSvg/>
                </div>
            );
        }
        
    });
    
});