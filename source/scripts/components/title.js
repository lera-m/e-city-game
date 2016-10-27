define(['react'], function (React) {

    return React.createClass({

        displayName: 'Title',

        render: function () {
            return (
                <p style={{fontSize: '24px', fontWeight: 'bold'}}>{this.props.text}</p>
            );
        }
    });

});
