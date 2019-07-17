// Strict mode
'use strict';

class Slider {
	constructor() {
		this.slides = [
			'css/img/diapo_1.jpg',
			'css/img/diapo_2.jpg',
			'css/img/diapo_3.jpg',
			'css/img/diapo_4.jpg',
			'css/img/diapo_5.jpg'
		];
		this.descriptions = [
			'Choisissez une station parmi celles sur la carte. Elles sont indiquées par un marqueur.',
			'Une fenêtre avec les informations de la station apparait. Vous avez la possibilité de réserver en cliquant sur le bouton "réserver".',
			'Rentrez votre nom et prénom.',
			'Puis signez le formulaire, cliquez sur "signer".',
			'Votre réservation est enregistrée, Si vous choisissez de réserver un autre vélo, celui-ci sera remplacé par le nouveau.'
		];
		this.index = -1;
		this.timer = window.setInterval(this.nextSlide.bind(this), 5000);

		document.getElementById("play_button").addEventListener("click", this.playSlide.bind(this));
		document.getElementById("pause_button").addEventListener("click", this.pauseSlide.bind(this));
		document.getElementById("right_button").addEventListener("click", this.nextSlide.bind(this));
		document.getElementById("left_button").addEventListener("click", this.prevSlide.bind(this));
		document.addEventListener("keydown", this.keyControl.bind(this));
	};

	playSlide() {
		this.index++;

		if (this.index === this.slides.length) {
			this.index = 0;
		}

		this.refreshSlider();
	}

	refreshSlider() {
		document.querySelector("#slider img").src = this.slides[this.index];
		document.querySelector('#slider figcaption').textContent = this.descriptions[this.index];
	}

	pauseSlide() {}

	nextSlide() {}

	prevSlide() {}

	keyControl() {}
}
