define(['react'], function (React) {
    
    return React.createClass ({
        
        displayName: 'City-Library',
        
        render: function () {
            return (
                <div className="city-library">
                    <ul>
                        <li>Авдеевка — Донецкая область</li>
                        <li>Александрия — Кировоградская область</li>
                        <li>Александровск — Луганская область</li>
                        <li>Алмазная — Луганская область</li>
                        <li>Алупка — Автономная Республика Крым</li>
                    </ul>
                </div>
            );
        }
        
    });
    
});