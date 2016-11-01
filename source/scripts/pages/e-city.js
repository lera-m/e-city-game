define(['react', '../components/side-bar', 'superagent'], function (React, SideBar, Superagent) {

    return React.createClass({

        displayName: 'E-City',
        
        getInitialState: function () {
            return {
                city: 'Odessa'
            };
        },
        
        onButtonClick: function (event) {
            Superagent
                .get('http://35.160.229.83:8080/city')
                .set('Accept', 'application/json')
                .query({
                    name: this.state.city
                })
                .end(function(error, response){
                    console.log(error, response);
                });
        },
        
        onInputChange: function (event) {
            this.setState({
                city: event.target.value
            });
        },
        
        render: function () {
            return (
                <div>
                    <SideBar/>
                    <div>
                        <input type="text" defaultValue={this.state.city} onChange={this.onInputChange}/>
                        <button onClick={this.onButtonClick}>Send</button>
                    </div>
                </div>
            );
        }
    });

});
