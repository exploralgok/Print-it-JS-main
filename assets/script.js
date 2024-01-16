// pour s'asurer que le code JS s'execute quand le navigateur a completment chargé le HTML et le DOM
// même si les ressources externes ne sont pas encores disponibles
// sécurité en plus de differ dans le footer
document.addEventListener("DOMContentLoaded", (event) => {

	const slides = [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	];


	// slider 
	let slideActive = 0;
	let bannerImage = document.querySelector("#banner .banner-img")
	let bannerText = document.querySelector("#banner .banner-txt")
	// creation tableau qui récupère les dots pour les utilier plus tard
	let dots = []

	// afficher 4 points
	function generateDots() {
		// pour chaque slide
		for (let i = 0; i < slides.length; i++) {
			let dot = document.createElement("div");
			dot.classList.add("dot");
			document.querySelector("#banner .dots").appendChild(dot);
			// ajout element tab
			dots.push(dot);
		}
		dots[0].classList.add("dot_selected")
	}

	generateDots()

	function changeDotColor(){
		// pour chaque div dot
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove("dot_selected")
			// si l'index du tableau = index des slides
			if (i == slideActive){
				dots[i].classList.add("dot_selected");
			}
		}
	}

	function changeSlide(sens) {
		slideActive = slideActive + sens;
		console.log(slideActive)
		// pour gérer les points à l'extrémité et défilement continue
		if (slideActive < 0)
			slideActive = slides.length - 1;
		if (slideActive > slides.length - 1)
			slideActive = 0;
		bannerImage.src = "./assets/images/slideshow/" + slides[slideActive]["image"];
		bannerText.innerHTML = slides[slideActive]["tagLine"];
		changeDotColor();
	}

	let arrowLeft = document.querySelector("#banner .arrow_left")
	arrowLeft.addEventListener("click", function () {
		changeSlide(-1)	 
	});

	let arrowRight = document.querySelector("#banner .arrow_right")
	arrowRight.addEventListener("click", function () {
		changeSlide(1)	 
	});

});
