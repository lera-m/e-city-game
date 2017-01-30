define(['react', '../components/side-bar', '../components/city-library', '../components/city-list',], function (React, SideBar, CityLibrary, CityList) {

    return React.createClass({

        displayName: 'Library',

        render: function () {
            return (
                <div>
                    <SideBar game={this.props.game}/>
                    <CityLibrary game={this.props.game}/>
                    <CityList/>
                </div>
            );
        }
    });

});
