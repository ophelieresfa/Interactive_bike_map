// Strict mode
'use strict';

class Reservation {

    initForm() {
        let button = document.getElementById("reserver");
        let reservationPart = document.querySelector("aside");
        let formPart = document.querySelector("form");

        button.addEventListener("click", function () {
            reservationPart.style.display = "none";
            formPart.style.display = "flex";
        });
    }

    keepName() {}

    closeForm() {}
}
