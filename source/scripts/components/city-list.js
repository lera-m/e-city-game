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
                                    <p className='city_list_name'>{city.name}</p>
                                    {this.state.expanded === city.id ? (
                                        <div>
                                            {
                                                city.arms ? <img src={city.arms}/> : null
                                            }
                                            {
                                                city.regionId ? <p>{this.props.game.getRegion(city.regionId)} область</p> : null
                                            }
                                            <p>Год основания: {city.establishment}</p>
                                            <p>Население: {city.population}</p>
                                            <a href={city.url} target="_blank" className='wiki-link-list'>Больше информации по ссылке</a>
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