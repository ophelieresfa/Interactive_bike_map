// Strict mode
'use strict';

class GoogleMap {
    constructor() {
        this.amien = {
            lat: 49.894009,
            lng: 2.295838
        };
    };

    initMap(){
        let map = new google.maps.Map(document.getElementById("map"), {
            center : this.amien,
            zoom: 14,
        });

        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Amiens&apiKey=5b12c800cb5e0ad63cd05a39206e90b20254719d", function (reponse) {
            let stations = JSON.parse(reponse);
            stations.forEach(function(station) {
                createMarker(station);
            });
        });
    }
}
