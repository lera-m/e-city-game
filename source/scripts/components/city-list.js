define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'CityList',
        
        render: function () {
            return (
                <div className="city-list">
                    <p>Названные города</p>
                    <ul className='ul-city'/>
                </div>
            );
        }
        
    });
    
});