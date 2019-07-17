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

    clearDraw() {}

    keepData() {}

    newReserv() {}

    timer() {}
}

