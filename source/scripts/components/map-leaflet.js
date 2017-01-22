define(['react', 'leaflet', 'react-dom', '../data/regions'], function (React, L, ReactDOM, Regions) {

    return React.createClass ({

        displayName: 'MapLeaflet',

        componentDidMount: function(){
            var mapNode = ReactDOM.findDOMNode(this.refs.map);

            this.map = L.map(mapNode, {
                center: [48.6206786, 31.5158776],
                zoom: 5,
                zoomControl: false,
                attributionControl: false,
                boxZoom: false,
                dragging: false,
                doubleClickZoom: false,
                scrollWheelZoom: false
            });

            this.updateRegions();
        },
        componentDidUpdate: function(){
            this.updateRegions();
        },

        updateRegions: function () {
            
            if (this.layers){
                this.layers.forEach(layer => {
                    this.map.removeLayer(layer);
                })
            }
            
            const serverRegionId = this.props.serverCity && this.props.serverCity.regionId;
            
            this.layers = [];
            
            for (let regionId in Regions) {
                const coordinates = Regions[regionId].geometry.coordinates.map(function (list) {
                    return list.map(function (lnglat) {
                        return [lnglat[1], lnglat[0]];
                    });
                });

                const polygon = L.polygon(coordinates, {
                    stroke: false,
                    fillOpacity: 1,
                    color: parseInt(regionId) === serverRegionId ? '#0b3577' : '#b1c9ef'
                });
                
                this.layers.push(polygon);
                polygon.addTo(this.map);
            }
            
            for (let regionId in Regions) {
                const coordinates = Regions[regionId].geometry.coordinates.map(function (list) {
                    return list.map(function (lnglat) {
                        return [lnglat[1], lnglat[0]];
                    });
                });
                
                const polygon = L.polygon(coordinates, {
                    fill: false,
                    weight: 2,
                    color: 'black'
                });
                
                this.layers.push(polygon);
                polygon.addTo(this.map);
            }
            
            if(this.props.serverCity){
                const marker = L.marker([this.props.serverCity.latitude, this.props.serverCity.longitude]); 
                this.layers.push(marker);
                marker.addTo(this.map);
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
