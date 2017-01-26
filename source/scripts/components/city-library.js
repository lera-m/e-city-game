define(['react', 'superagent', '../settings'], function (React, Superagent, Settings) {
    
    var alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю', 'я'];
    
    return React.createClass ({
        
        displayName: 'City-Library',
        
        getInitialState: function () {
            return {
                library: [],
                expanded: null,
                letter: '',
                cityInfo: null,
                markedCity: null
            };
        },
        
        componentDidMount: function(){
            this.getLibrary();    
        },
                
        getLibrary: function () {
            Superagent
            .get(Settings.host + Settings.api + '/cities')
                .set('Accept', 'application/json')
                .end((error, response) => {
                    this.setState({
                            library: response.body
                    });
                });
        },
        
        onClickButton: function(letter, event){
            
            this.setState ({
                expanded: this.state.expanded === letter ? null : letter,
                letter: letter,
                cityInfo: null
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
                
        addCities: function(obj){
            var letter = this.state.letter;
            var cities = obj[letter];
            return (
                this.state.expanded === letter ? (
                    <div key={letter} className='table-cities'>
                        <ul>
                            {cities.map((city, i) => {
                                return (
                                    <li key={city.id}>
                                        <p onClick={this.getCityInfo.bind(this, city.id)} className={city.id === this.state.markedCity ? 'marked' : 'not-marked'}>{city.name}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null
            );
        },
                
        getCityInfo: function(id, event){ 
            if (id){
                Superagent
                    .get(Settings.host + Settings.api + '/city/' + id)
                    .set('Accept', 'application/json')
                    .end((error, response) =>{
console.log(JSON.parse(response.text));
                        this.setState({
                            cityInfo: JSON.parse(response.text),
                            markedCity: (JSON.parse(response.text)).id
                        });   
                    });
            }
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
                                        <h2 onClick={this.onClickButton.bind(this, letter)} className={letter === this.state.letter ? 'marked' : 'not-marked'}>
                                            {letter.toUpperCase()}
                                        </h2>
                                        
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    {this.addCities(sort)}
                    {this.state.cityInfo ? (
                        <div key={this.state.cityInfo.id} className='city_info'>
                            <h3>{this.state.cityInfo.name}</h3>
                            {
                                this.state.cityInfo.arms ? <img src={this.state.cityInfo.arms}/> : null
                            }
                            <p><strong>Год основания: </strong>{this.state.cityInfo.establishment}</p>
                            <p><strong>Население: </strong>{this.state.cityInfo.population}</p>
                            <a href={this.state.cityInfo.url} target="_blank" className='wiki-link-library'><strong>Больше информации по ссылке</strong></a>
                        </div>
                    ) : null}
                </div>
            );
        }
        
    });
    
});


