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
                    name: this.state.city
                })
                .auth('user', 'password', {type:'auto'})
                .end((error, response) => /* arrow function */{
                    if (response.body && response.body.length > 0){
                        var name = response.body[0].name;
                        var letter = name[name.length - 1].toUpperCase();
                        this.setState({
                            city: letter,
                            inputLetter: letter
                        });
                        this.props.onAddCity(response.body[0]);
                    }
                });
        },
        
        onInputChange: function (event) {
            var city = event.target.value;
            
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
                    <div>
                        <input className='city' type="text" value={this.state.city} onChange={this.onInputChange}/>
                        <button onClick={this.onButtonClick}>Send</button>
                    </div>
                </div>
            );
        }
        
    });
    
});