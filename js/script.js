// Strict mode
'use strict';

var slider = new Slider();
slider.nextSlide();

var map = new GoogleMap();
function initMap(){
    map.initMap();
}

var reservation = new Reservation();
reservation.initForm();
reservation.keepName();
reservation.closeForm();

var canvas = new Canvas();
canvas.draw();
canvas.clearDraw();
canvas.initTouch();
canvas.keepData();
canvas.newReserv();
canvas.timer();