var console;
define(['react'], function (React) {

    return React.createClass({

        displayName: 'E-City',

        render: function () {
            console.log(this.props);
            return (
                <div>
                    E-City Start the Game
                </div>
            );
        }
    });

});
