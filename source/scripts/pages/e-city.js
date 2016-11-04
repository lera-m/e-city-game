define(['react', '../components/side-bar', '../components/city-list', '../components/play-game'], function (React, SideBar, CityList, PlayGame) {

    return React.createClass({

        displayName: 'E-City',
                
        render: function () {
            return (
                <div>
                    <SideBar/>
                    <PlayGame/>
                    <CityList/>
                </div>
            );
        }
    });

});
