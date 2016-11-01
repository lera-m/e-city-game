define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'City-List',
        
        render: function () {
            return (
                <div className="city-list">
                    <p>Названные города</p>
                </div>
            );
        }
        
    });
    
});