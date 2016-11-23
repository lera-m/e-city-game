define(['react', '../components/side-bar', '../components/game-rules', '../components/city-list',], function (React, SideBar, GameRules, CityList) {

    return React.createClass({

        displayName: 'Rules',

        render: function () {
            return (
                <div>
                    <SideBar game={this.props.game}/>
                    <GameRules/>
                    <CityList/>
                </div>
            );
        }
    });

});
