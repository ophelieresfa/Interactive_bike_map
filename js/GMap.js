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
    }
}
