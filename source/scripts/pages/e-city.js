define(['react', '../components/side-bar'], function (React, SideBar) {

    return React.createClass({

        displayName: 'E-City',

        render: function () {
            return (
                <div>
                    <SideBar/>
                </div>
            );
        }
    });

});
