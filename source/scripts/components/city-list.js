define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'CityList',
        
        render: function () {
            return (
                <div className="city-list">
                    <p>Названные города</p>
                    <ul className='ul-city'>
                        {this.props.cities && this.props.cities.map(function(city, i){
                            return (
                                <li key={city + i}>{city}</li>
                            );
                        })}
                        
                    
                    </ul>
                </div>
            );
        }
        
    });
    
});