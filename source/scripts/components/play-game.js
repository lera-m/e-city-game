define(['react', 'superagent',], function (React, Superagent) {
    
    return React.createClass ({
        
        displayName: 'PlayGame',
        
        getInitialState: function () {
            return {
                city: ''
            };
        },
        
        onButtonClick: function (event) {
            Superagent
                .get(' http://ecity.org.ua:8080/city')
                .set('Accept', 'application/json')
                .query({
                    name: this.state.city
                })
                .end((error, response) => /* arrow function */{
                    var name = JSON.parse(response.text)[0].name;
                    var letter = name[name.length - 1].toUpperCase();
                    this.setState({
                        city: letter
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
                        <input type="text" placeholder={'city'} value={this.state.city} onChange={this.onInputChange}/>
                        <button onClick={this.onButtonClick}>Send</button>
                    </div>
                </div>
            );
        }
        
    });
    
});