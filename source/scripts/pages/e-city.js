var console;
define(['react', '../components/side-bar'], function (React, SideBar) {

    return React.createClass({

        displayName: 'E-City',

        render: function () {
            console.log(this.props);
            return (
                <div>
                    <SideBar/>
                </div>
            );
        }
    });

});
