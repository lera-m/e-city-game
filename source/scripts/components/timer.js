define(['react'], function (React) {

    return React.createClass ({

        displayName: 'Timer',

        propTypes: {
            time: React.PropTypes.number.isRequired,
            onTimeout: React.PropTypes.func.isRequired
        },

        getInitialState: function () {
            return {
                time: this.props.time
            };
        },

        componentDidMount: function (){
            this.interval = setInterval(this.updateTimer, 1000);
        },

        componentWillUnmount: function (){
            clearInterval(this.interval);
        },

        updateTimer: function(){

            var state = {};

            state.time = Math.max(0, this.state.time - 1);

            this.setState(state);

            if (state.time === 0) {
                clearInterval(this.interval);

                this.props.onTimeout();
            }
        },

        render: function () {
            var time = this.state.time.toString();

            if (this.state.time < 10) {
                time = '0' + time;
            }

            return (
                <div className='score'>
                    <p>
                        {time}
                    </p>
                    <div className="first-number counter"></div>
                    <div className="second-number counter"></div>
                </div>
            );
        }

    });

});
