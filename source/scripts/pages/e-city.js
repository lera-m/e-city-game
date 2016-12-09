define(['react', '../components/side-bar', '../components/city-list', '../components/play-game'], function (React, SideBar, CityList, PlayGame) {

    return React.createClass({

        displayName: 'E-City',
        
          getInitialState: function () {
            return {
                cities: [],
                time: null
            };
        },
        
        onAddCity: function(city){
            this.setState({
                cities: [city].concat(this.state.cities)
            });
        },
        
        getTimerValue: function(){
            this.setState({
                time: 0
            });
        },
                
        render: function () {
            return (
                <div>
                    <SideBar game={this.props.game}/>
                    <PlayGame onAddCity={this.onAddCity}  game={this.props.game} getTimerValue={this.getTimerValue} time={this.state.time}/>
                    <CityList cities={this.state.cities}/>
                </div>
            );
        }
    });

});
