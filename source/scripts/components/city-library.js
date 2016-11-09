define(['react', 'superagent'], function (React, Superagent) {
    
    return React.createClass ({
        
        displayName: 'City-Library',
        
        getInitialState: function () {
            return {
                library: []
            };
        },
        
        componentDidMount: function(){
            this.getLibrary();    
        },
        
        getLibrary: function () {
            Superagent
            .get('http://ecity.org.ua:8080/names')
                .set('Accept', 'application/json')
                .end((error, response) => /* arrow function */{
                    this.setState({
                            library: response.body
                    });
                });
        },
        
        render: function () {
            return (
                <div className="city-library">
                    <ul>
                        {this.state.library && this.state.library.map((city, i) => {
                            return (
                                <li key={city.id}>
                                    <p>{city.name}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
        
    });
    
});

