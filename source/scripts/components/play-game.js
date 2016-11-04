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
                .end(function(error, response){
                    var name = JSON.parse(response.text)[0].name;
                    var letter = name[name.length - 1].toUpperCase();
                    document.querySelector(".city-list ul").innerHTML += '<li>' + name + '</li>';
                    console.log("letter = " + letter.toUpperCase());
/*
                    this.setState({
                        city: letter
                    });
*/
                    document.querySelector("input").defaultValue = letter;
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
                        <input type="text" placeholder={'city'} defaultValue={this.state.city} onChange={this.onInputChange}/>
                        <button onClick={this.onButtonClick}>Send</button>
                    </div>
                </div>
            );
        }
        
    });
    
});