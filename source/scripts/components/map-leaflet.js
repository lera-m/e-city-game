define(['react', 'leaflet', 'react-dom', './map-leaflet-regions'], function (React, L, ReactDOM, MapLeafletRegions) {

    return React.createClass ({

        displayName: 'MapLeaflet',

        componentDidMount: function(){
            var mapNode = ReactDOM.findDOMNode(this.refs.map);

            this.map = L.map(mapNode, {
                center: [48.6206786, 31.5158776],
                zoom: 5
            });

            this.updateRegions();
        },

        updateRegions: function () {
            for (var region in MapLeafletRegions) {
                var polygon = L.polygon(MapLeafletRegions[region], {color: region === 'odessa' ? 'red' : 'green'});

                polygon.addTo(this.map);
            }
        },

        render: function () {
            return (
                <div ref="map" style={{height:'500px'}}>

                </div>
            );
        }

    });

});
