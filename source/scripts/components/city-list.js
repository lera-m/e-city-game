define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'CityList',
        
        getInitialState: function () {
            return {
                expanded: null
            };
        },
        
        onClickButton: function(city, event){
            this.setState ({
                expanded: this.state.expanded === city.id ? null : city.id
            });
        },
        
        render: function () {
            return (
                <div className="city-list">
                    <p>Названные города</p>
                    <ul className='ul-city'>
                        {this.props.cities && this.props.cities.map((city, i) => {
                            
                            return (
                                <li key={city.id} onClick={this.onClickButton.bind(this, city)}>
                                    {city.name}
                                    {this.state.expanded === city.id ? (
                                        <div>{city.url}</div>
                                    ) : null}
                                    
                                </li>
                            );
                        })}
                        
                    
                    </ul>
                </div>
            );
        }
        
    });
    
});