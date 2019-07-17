// Strict mode
'use strict';

class Canvas {
    constructor() {
        this.reservation = 0;
    }

    draw() {
        let canvas = document.getElementById('sign');
        let ctx = canvas.getContext('2d');

        canvas.width = 200;
        canvas.height = 100;
        ctx.save();

        canvas.addEventListener("mousedown", function (event) {
            mousedown(event)
        });

        function mousedown(event) {
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            canvas.addEventListener("mousemove", paint);
        }


        function paint(event) {
            let alertMessage = document.getElementById("alert_message");
            alertMessage.innerText = "";
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            sessionStorage.setItem("canvas", "1");
        }

        canvas.addEventListener("mouseup", function (event) {
            mouseup(event)
        });

        function mouseup() {
            canvas.removeEventListener("mousemove", paint);
        }
    }

    initTouch() {
        let canvas = document.getElementById('sign');
        let ctx = canvas.getContext('2d');

        canvas.width = 200;
        canvas.height = 100;
        ctx.save();

        canvas.addEventListener("touchstart", function (event) {
            touchdown(event)
        });

        function touchdown(event) {
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            canvas.addEventListener("touchmove", paint);
        }


        function paint(event) {
            let alertMessage = document.getElementById("alert_message");
            alertMessage.innerText = "";
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            sessionStorage.setItem("canvas", "1");
        }

        canvas.addEventListener("touchup", function (event) {
            touchup(event)
        });

        function touchup() {
            canvas.removeEventListener("touchmove", paint);
        }
    }

    clearDraw() {
        let canvas = document.getElementById('sign');
        let ctx = canvas.getContext('2d');
        let alertMessage = document.getElementById("alert_message");
        let canvasSign = sessionStorage.getItem("canvas");
        let canvasPart = document.getElementById("canvas_part");
        let mapId = document.getElementById("map");
        let reservValid = sessionStorage.getItem("validReserv");
        let timerDataPart = document.getElementById('timerInfo');

        document.getElementById("effacer").addEventListener('click', function () {
            sessionStorage.setItem("canvas", "0");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });

        document.getElementById("effacer").addEventListener('click', function () {
            alertMessage.innerText = "Vous devez signer avant de valider.";
        });

        if (canvasSign !== "1") {
            document.getElementById("signer").addEventListener('click', function () {
                alertMessage.innerText = "Vous devez signer avant de valider.";
            });
        }

        document.getElementById("effacer").addEventListener('click', function () {
            document.getElementById("signer").addEventListener('click', function () {
                sessionStorage.setItem("validReserv", null);
                alertMessage.innerText = "Vous devez signer avant de valider.";
                canvasPart.style.display = "flex";
                mapId.style.display = "flex";
                if (reservValid !== "null") {
                    let reservData1 = document.getElementById("reserv_data");
                    let reservData2 = document.getElementById("reservData");
                    reservData1.style.display = "none";
                    reservData2.style.display = "block";
                    timerDataPart.innerText = "Aucune réservation n'est enregistrée pour le moment.";
                    reservData1.style.display = "none";
                }
            });
        });
    }

    keepData() {
        let timerDataPart = document.getElementById('timerInfo');
        let timerDataPart2 = document.getElementById('timer_info');
        let reservValid = sessionStorage.getItem("validReserv");
        let timerInfo = document.getElementById('compteur');
        let lastname = localStorage.getItem('lastname');
        let firstname = localStorage.getItem('firstname');
        let stationName = sessionStorage.getItem("stationName");
        let stationAddress = sessionStorage.getItem("stationAddress");
        let reservData1 = document.getElementById("reserv_data");

        if (reservValid === null) {
            timerDataPart.innerText = "Aucune réservation n'est enregistrée pour le moment.";
            reservData1.style.display = "none";
        } else {
            let reservData2 = document.getElementById("reservData");
            reservData2.style.display = "none";
            timerDataPart2.innerText = lastname + " " + firstname + " vous avez un vélo de réservé à la station : \n\n" + stationName + "\n" + stationAddress;
            document.getElementById("timer_info").style.paddingTop = "8rem";
            document.getElementById("compteur").style.paddingBottom = "8rem";
            let x = setInterval(function () {
                let expired = sessionStorage.getItem("expired");
                let now = new Date().getTime();
                let duration = expired - now;
                let min = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
                let sec = Math.floor((duration % (1000 * 60)) / 1000);

                sessionStorage.setItem("minutes", min);
                sessionStorage.setItem("secondes", sec);
                timerInfo.style.display = "block";
                timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + min + " minutes et " + sec + " secondes";

                if (min < 1) {
                    timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + sec + " secondes";
                }

                if (sec < 10) {
                    timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + min + " minutes et 0" + sec + " secondes";
                }

                if ((min < 1) && (sec < 10)) {
                    timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + sec + " secondes";
                }

                if (min < 0) {
                    timerInfo.innerText = "Votre réservation a expiré";
                    timerDataPart2.style.display = "none";
                }
            });
        }
    }

    newReserv() {
        let newReserv = document.getElementById("new_reserv");
        let timerDataPart2 = document.getElementById('timer_info');
        let mapId = document.getElementById("map");
        newReserv.addEventListener('click', function () {
            let lastname = localStorage.getItem('lastname');
            let firstname = localStorage.getItem('firstname');
            let stationName = sessionStorage.getItem("stationName");
            let stationAddress = sessionStorage.getItem("stationAddress");
            mapId.style.display = "block";
            newReserv.style.display = "none";
            timerDataPart2.innerText = lastname + " " + firstname + " vous avez un vélo de réservé à la station : \n\n" + stationName + "\n" + stationAddress;
        });
    }

    timer() {
        let tps = 20 * 60 * 1000;
        let countDownTime = new Date().getTime() + tps;
        let expired;
        document.getElementById("sign").addEventListener('click', function () {
            document.getElementById("signer").addEventListener('click', function () {
                this.reservation = 1;
                expired = sessionStorage.setItem("expired", countDownTime);
            });
        });

        let timerInfo = document.getElementById('compteur');
        document.getElementById("sign").addEventListener('click', function () {
            document.getElementById("signer").addEventListener('click', function () {
                let x = setInterval(function () {
                    let expired = sessionStorage.getItem("expired");
                    let now = new Date().getTime();
                    let duration = expired - now;
                    let min = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
                    let sec = Math.floor((duration % (1000 * 60)) / 1000);
                    sessionStorage.setItem("minutes", min);
                    sessionStorage.setItem("secondes", sec);
                    timerInfo.style.display = "block";
                    timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + min + " minutes et " + sec + " secondes";

                    if (min < 1) {
                        timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + sec + " secondes";
                    }

                    if (sec < 10) {
                        timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + min + " minutes et 0" + sec + " secondes";
                    }

                    if ((min < 1) && (sec < 10)) {
                        timerInfo.innerText = "Votre réservation reste enregistrée pendant encore : " + sec + " secondes";
                    }

                    if (min < 0) {
                        timerInfo.innerText = "Votre réservation a expiré";
                    }
                });
            });
        });
    }
}