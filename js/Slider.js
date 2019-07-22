// Strict mode
"use strict";

class Slider {
	constructor() {

		// Add images for slideshow

		this.slides = [
			"css/img/diapo_1.jpg",
			"css/img/diapo_2.jpg",
			"css/img/diapo_3.jpg",
			"css/img/diapo_4.jpg",
			"css/img/diapo_5.jpg"
		];

		// Add descriptions for slideshow

		this.descriptions = [
			"Choisissez une station parmi celles sur la carte. Elles sont indiquées par un marqueur.",
			"Une fenêtre avec les informations de la station apparait. Vous avez la possibilité de réserver en cliquant sur le bouton 'réserver'.",
			"Rentrez votre nom et prénom.",
			"Puis signez le formulaire, cliquez sur 'signer'.",
			"Votre réservation est enregistrée, Si vous choisissez de réserver un autre vélo, celui-ci sera remplacé par le nouveau."
		];

		// Add index for slideshow

		this.index = -1;

		// Add timer for slideshow

		this.timer = window.setInterval(this.nextSlide.bind(this), 5000);

		// Add Event listener for method of object Slider

		document.getElementById("play_button").addEventListener("click", this.playSlide.bind(this));
		document.getElementById("pause_button").addEventListener("click", this.pauseSlide.bind(this));
		document.getElementById("right_button").addEventListener("click", this.nextSlide.bind(this));
		document.getElementById("left_button").addEventListener("click", this.prevSlide.bind(this));
		document.addEventListener("keydown", this.keyControl.bind(this));
	}

	// Add method for play slides of slideshow

	playSlide() {
		this.index++;

		if (this.index === this.slides.length) {
			this.index = 0;
		}

		this.refreshSlider();
	}

	// Add method for refresh the slideshow

	refreshSlider() {
		document.querySelector("#slider img").src = this.slides[this.index];
		document.querySelector("#slider figcaption").textContent = this.descriptions[this.index];
	}

	// Add method for pause slides of slideshow

	pauseSlide() {
		let icon = document.querySelector("#pause_button i");
		let toggle  = document.querySelector("#pause_button");

		icon.classList.toggle("fa-play");
		icon.classList.toggle("fa-pause");

		if (this.timer == null) {
			this.timer = window.setInterval(this.nextSlide.bind(this), 5000);
		}

		else {
			window.clearInterval(this.timer);
			this.timer = null;
		}
	}

	// Add method for next slides of slideshow

	nextSlide() {
		this.index++;

		if (this.index === this.slides.length) {
			this.index = 0;
		}

		this.refreshSlider();

		if (this.timer !== null) {
			window.clearInterval(this.timer);
			this.timer = window.setInterval(this.nextSlide.bind(this),5000);
		}
	}

	// Add method for prevent slides of slideshow

	prevSlide() {
		this.index--;
		if (this.index < 0){
			this.index = this.slides.length -1;
		}
		this.refreshSlider();
		if (this.timer !== null) {
			window.clearInterval(this.timer);
			this.timer = window.setInterval(this.nextSlide.bind(this), 5000);
		}
	}

	// Add method for key control of slideshow

	keyControl(e) {
		switch (e.code) {
			case "ArrowLeft":
				this.prevSlide();
				break;

				case "ArrowRight":
					this.nextSlide();
					break;

					case "Space":
						this.playSlide();
						break;
		}
	}
}
