define(['react', 'superagent'], function (React, Superagent) {
    
    var alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю', 'я'];
    
    return React.createClass ({
        
        displayName: 'City-Library',
        
        getInitialState: function () {
            return {
                library: [],
                expanded: null
            };
        },
        
        componentDidMount: function(){
            this.getLibrary();    
        },
        
        getLibrary: function () {
            Superagent
            .get('http://ecity.org.ua:8080/cities')
                .set('Accept', 'application/json')
                .end((error, response) => /* arrow function */{
                    this.setState({
                            library: response.body
                    });
                });
        },
        
        onClickButton: function(letter, event){
            this.setState ({
                expanded: this.state.expanded === letter ? null : letter
            });
        },
        
        citySort: function(){
            var sorted = {};
            for (var i = 0, x = this.state.library.length; i < x; i++){
                var char = this.state.library[i].name[0].toLowerCase();
                if (!sorted[char]){
                    sorted[char] = [this.state.library[i]];
                } else {
                    sorted[char].push(this.state.library[i]);
                }
            }
            return sorted;
        },
        
        render: function () {
            var sort = this.citySort();
            return (
                <div className="city-library">
                    <ul className='letters'>
                        {alphabet.map((letter, i) => {
                            var cities = sort[letter];
                            if (cities){
                                return (
                                    <li key={i}>
                                        <h2 onClick={this.onClickButton.bind(this, letter)}>
                                            {letter.toUpperCase()}
                                        </h2>
                                        {this.state.expanded === letter ? (
                                            <div key={letter}>
                                                <ul>
                                                    {cities.map((city, i) => {
                                                        return (
                                                            <li key={city.id}>
                                                                <p>{city.name}</p>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ) : null}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            );
        }
        
    });
    
});

/*

                <div className="city-library">
                    {alphabet.map((letter, i) => {
                        var cities = sort[letter];
                        if (cities){
                            return (
                                <div key={i}>
                                    <h2>{letter.toUpperCase()}</h2>
                                    <ul>
                                        {cities.map((city, i) => {
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
                    })}
                </div>
*/
