define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'Town-List',
        
        render: function () {
            return (
                <div className="town-list">
                    <p>Названные города</p>
                </div>
            );
        }
        
    });
    
});