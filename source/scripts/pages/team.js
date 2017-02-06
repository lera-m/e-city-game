define(['react', '../components/side-bar', '../components/city-list', '../components/team-list'], function (React, SideBar, CityList, TeamList) {

    return React.createClass({

        displayName: 'Team',


        render: function () {
            return (
                <div>
                    <SideBar game={this.props.game}/>
                    <TeamList/>
                    <CityList/>
                </div>
            );
        }
    });

});
