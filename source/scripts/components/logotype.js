define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'Logotype', 
        
        render: function () {
            return (
                    <div className="logo">
                        <input type='image' src='../img/logo.png'/>
                    </div>
            );
        }
        
    });
    
});