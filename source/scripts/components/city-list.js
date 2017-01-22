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
                    <h2>Название городов</h2>
                    <ul className='ul-city'>
                        {this.props.cities && this.props.cities.map((city, i) => {
                            return (
                                <li key={city.id} onClick={this.onClickButton.bind(this, city)} className={(i === 0) ? 'highlightLastCity' : 'noHighlightLastCity'}>
                                    <p>{city.name}</p>
                                    {this.state.expanded === city.id ? (
                                        <div>
                                            <img src={city.arms} alt={city.name}/>
                                            <a href={city.url} target="_blank">{city.url}</a>
                                        </div>
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