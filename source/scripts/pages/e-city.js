define(['react', '../components/side-bar', '../components/city-list', '../components/play-game'], function (React, SideBar, CityList, PlayGame) {

    return React.createClass({

        displayName: 'E-City',
        
          getInitialState: function () {
            return {
                cities: []
            };
        },
        
        onAddCity: function(city){
            this.setState({
                cities: this.state.cities.concat([city])
            });
        },
                
        render: function () {
            console.log(this.props.game);
            return (
                <div>
                    <SideBar game={this.props.game}/>
                    <PlayGame onAddCity={this.onAddCity}/>
                    <CityList cities={this.state.cities}/>
                </div>
            );
        }
    });

});
