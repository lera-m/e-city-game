define(['react', 'leaflet', 'react-dom'], function (React, L, ReactDOM) {
    
    return React.createClass ({
        
        displayName: 'MapLeaflet',
        
        componentDidMount: function(){
            var mapNode = ReactDOM.findDOMNode(this.refs.map);

            this.map = L.map(mapNode, {
                center: [48.6206786, 31.5158776],
                zoom: 13
            });
        },
                
        render: function () {
            return (
                <div ref="map" style={{height:'500px'}}>
                    
                </div>
            );
        }
        
    });
    
});