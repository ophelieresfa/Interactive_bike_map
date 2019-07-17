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
	};

	playSlide() {}

	refreshSlider() {}

	pauseSlide() {}

	nextSlide() {}

	prevSlide() {}

	keyControl() {}
}
