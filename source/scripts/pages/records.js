define(['react', '../components/side-bar', '../components/city-list', '../components/records-table'], function (React, SideBar, CityList, RecordsTable) {

    return React.createClass({

        displayName: 'Records',
        
                
        render: function () {
            return (
                <div>
                    <SideBar game={this.props.game}/>
                    <RecordsTable/>
                    <CityList game={this.props.game}/>
                </div>
            );
        }
    });

});
