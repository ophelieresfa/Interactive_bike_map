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

        function createMarker(station) {
            let green_marker = {
                url: 'css/img/markers/01.png',
                scaledSize: new google.maps.Size(25, 40)};
            let red_marker = {
                url: 'css/img/markers/02.png',
                scaledSize: new google.maps.Size(25, 40)};
            let marker = new google.maps.Marker({
                position: station.position,
                map: map,
                title: station.name,
                icon: "",});
            let statusStation = document.getElementById('status');
            let nameStation = document.getElementById('name');
            let addressStation = document.getElementById('address');
            let numbersStation = document.getElementById('numbers');
            let bikesStation = document.getElementById('bikes');

            if (station.status === "OPEN") {
                marker.icon = green_marker;
            }

            if (station.status === "CLOSED") {
                marker.icon = red_marker;
            }
        }
    }
}
