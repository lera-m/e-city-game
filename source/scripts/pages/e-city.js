define(['react', '../components/side-bar', '../components/city-list', '../components/play-game'], function (React, SideBar, CityList, PlayGame) {

    return React.createClass({

        displayName: 'E-City',
        
        getInitialState: function () {
            return {
                cities: []
            };
        },
        
        componentWillMount: function(){
            if (this.props.game.gameHistory){
                
                this.setState({
                    cities: this.props.game.gameHistory.map(historyItem => historyItem.city).reverse()
                });
            }  
        },
        
        componentDidMount: function () {
            this.props.game.onChangeGameId(this.onChangeGameId);
        },

        componentWillUnmount: function () {
            this.props.game.offChangeGameId(this.onChangeGameId);
        },

        onChangeGameId: function (gameId) {
            this.setState({
                cities: []
            });
        },
        
        onAddCity: function(city){
            this.setState({
                cities: [city].concat(this.state.cities)
            });
        },
                
        render: function () {
            return (
                <div>
                    <SideBar game={this.props.game}/>
                    <PlayGame onAddCity={this.onAddCity} game={this.props.game}/>
                    <CityList cities={this.state.cities} game={this.props.game}/>
                </div>
            );
        }
    });

});
