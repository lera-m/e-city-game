define(['react', 'superagent',], function (React, Superagent) {
    
    return React.createClass ({
        
        displayName: 'PlayGame',
        
        getInitialState: function () {
            return {
                city: '',
                inputLetter: ''
            };
        },
        
        onButtonClick: function (event) {
            Superagent
                .get(' http://ecity.org.ua:8080/city')
                .set('Accept', 'application/json')
                .query({
                    name: this.state.inputLetter + this.state.city
                })
                .end((error, response) => /* arrow function */{
                    var name = JSON.parse(response.text)[0].name;
                    var letter = name[name.length - 1].toUpperCase();
                    this.setState({
                        city: '',
                        inputLetter: letter
                    });
                    this.props.onAddCity(name);
                });
        },
        
        onInputChange: function (event) {
            this.setState({
                city: event.target.value
            });
        },
        
        render: function () {
            return (
                <div className="play-game">
                    <div>
                        <input className='letter' type="text" value={this.state.inputLetter} /* style={this.state.display} */ readOnly/>
                        <input className='city' type="text" value={this.state.city} onChange={this.onInputChange}/>
                        <button onClick={this.onButtonClick}>Send</button>
                    </div>
                </div>
            );
        }
        
    });
    
});