define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'Timer',
        
        getInitialState: function () {
            return {
                time: 12
            };
        },
        
        componentDidMount: function (){
            this.interval = setInterval(this.updateTimer, 1000);
        },
        
        componentWillUnmount: function (){
            clearInterval(this.interval);
            console.log('finished');
        },  
        
        updateTimer: function(){
            var state = {};
            var counter = this.state.time;
            
            if (counter < 0 || counter === '00'){
                this.componentWillUnmount();
            } else if (counter <= 10){
                state.time = '0' + (counter - 1);
            } else {
                state.time = counter - 1;
            }
            this.setState(state);
        },  
        
        render: function () {
            return (
                    <div className='score'>
                        <p>
                            {this.state.time}
                        </p>
                        <div className="first-number counter"></div>
                        <div className="second-number counter"></div>
                    </div>

            );
        }
        
    });
    
});