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

    keepName() {
        let lastname = document.getElementById('lastname');
        let firstname = document.getElementById('firstname');
        let warningText = document.getElementById('warning_text');

        if ((lastname.value === "") || (firstname.value === "")) {
            document.getElementById("reserv").addEventListener('click', function () {
                warningText.innerText = "Vous devez rentrer votre nom et prénom avant de réserver."
            });
        }

        document.getElementById("reserv").addEventListener('click',function () {
            if ((lastname !== undefined) && (firstname !== undefined)) {
                localStorage.setItem('lastname', lastname.value);
                localStorage.setItem('firstname', firstname.value);
            }
        });
    }

    closeForm() {
        let lastname = document.getElementById('lastname');
        let firstname = document.getElementById('firstname');
        let formPart = document.querySelector("form");
        let canvasPart = document.getElementById("canvas_part");

        document.getElementById("reserv").addEventListener('click',function () {
            if ((lastname.value !== "") && (firstname.value !== "")) {
                formPart.style.display = "none";
                canvasPart.style.display = "flex";
            }
        });
    }
}
