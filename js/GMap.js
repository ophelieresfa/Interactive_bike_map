// Strict mode
'use strict';

class GoogleMap {
    constructor() {

        // Add coordonates for center map

        this.amien = {
            lat: 49.894009,
            lng: 2.295838
        };
    };

    // Add method for initialize map

    initMap(){

        // Initialize map

        let map = new google.maps.Map(document.getElementById("map"), {
            center : this.amien,
            zoom: 14,
        });

        // Call Ajax

        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Amiens&apiKey=5b12c800cb5e0ad63cd05a39206e90b20254719d", function (reponse) {
            let stations = JSON.parse(reponse);
            stations.forEach(function(station) {
                createMarker(station);
            });
        });

        // Created Markers

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

            // Add event on click to markers

            marker.addListener('click', (function() {
                let reservationPart = document.querySelector("aside");
                let formPart = document.querySelector("form");
                let canvasPart = document.getElementById("canvas_part");
                let alertMessage = document.getElementById("alert_message");
                let mapId = document.getElementById("map");
                let timerDataPart = document.getElementById('timer_info');
                let newReserv = document.getElementById("new_reserv");
                let reservationButton = document.getElementById("reserver");

                reservationPart.style.display = "block";
                formPart.style.display = "none";
                canvasPart.style.display = "none";
                nameStation.textContent = station.name;
                addressStation.textContent = station.address;
                bikesStation.textContent = "Il reste " + station.available_bikes + " vélo(s) disponible(s) dans la stations";

                if (station.status === "OPEN") {
                    statusStation.textContent = "Station Ouverte";
                }

                else {
                    statusStation.textContent = "Station Fermée";
                }

                if (station.bike_stands > 0) {
                    numbersStation.textContent = "Il y a " + station.bike_stands + " place(s) disponible(s)";
                }

                else {
                    numbersStation.textContent = "Il n'y a plus de places disponible"
                }

                if (station.available_bikes > 0) {
                    reservationButton.style.display = "block";
                }

                else {
                    reservationButton.style.display = "none";
                }

                // Add event listener on click to signature of canvas

                document.getElementById("sign").addEventListener('click', function () {
                    document.getElementById("signer").addEventListener('click', function () {
                        let lastname = localStorage.getItem('lastname');
                        let firstname = localStorage.getItem('firstname');
                        let reservData1 = document.getElementById("reserv_data");
                        let reservData2 = document.getElementById("reservData");
                        reservData2.style.display = "none";
                        reservData1.style.display = "block";
                        sessionStorage.setItem("stationName", station.name);
                        sessionStorage.setItem("stationAddress", station.address);
                        sessionStorage.setItem("validReserv", "1");
                        alertMessage.style.display = "none";
                        mapId.style.display = "none";
                        canvasPart.style.display = "none";
                        document.getElementById("timer_info").style.paddingTop = "8rem";
                        document.getElementById("compteur").style.paddingBottom = "8rem";
                        timerDataPart.innerText = "Félicitation " + lastname + " " + firstname + " vous avez un vélo de réservé à la station : \n\n" + station.name + "\n" + station.address;
                        newReserv.style.display = "block";
                    });
                });
            }));
        }
    }
}
