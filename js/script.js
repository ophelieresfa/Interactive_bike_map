// Strict mode
"use strict";

// Creates the object slider

var slider = new Slider();

// Launch the slider

slider.nextSlide();

// Creates the object map

var map = new GoogleMap();

// Launch the map

function initMap(){
    map.initMap();
}

// Creates the object location

var reservation = new Reservation();

// Launch the location

reservation.initForm();
reservation.keepName();
reservation.closeForm();

// Creates the object canvas

var canvas = new Canvas();

// Launch the canvas

canvas.draw();
canvas.clearDraw();
canvas.initTouch();
canvas.keepData();
canvas.newReserv();
canvas.timer();