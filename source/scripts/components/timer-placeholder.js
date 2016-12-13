define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'TimerPlaceholder', 
        
        render: function () {
            return (
                    <div className='score'>
                        <p>
                            00
                        </p>
                        <div className="first-number counter"></div>
                        <div className="second-number counter"></div>
                    </div>

            );
        }
        
    });
    
});