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
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;
    document.querySelector("#banner .banner-img").src = "./assets/images/slideshow/" + slides[numero]["image"];
	document.querySelector("#banner .banner-txt").innerHTML = slides[numero]["tagLine"];
}

let arrowLeft = document.querySelector("#banner .arrow_left")
arrowLeft.addEventListener("click", function () {
	ChangeSlide(1)	 
});

let arrowRight = document.querySelector("#banner .arrow_right")
arrowRight.addEventListener("click", function () {
	ChangeSlide(-1)	 
});

// selection de la div parent pour ajouter la div enfant dans la boucle
const dots = document.querySelector(".dots");

// afficher 4 points
for (let i = 0; i < slides.length; i++) {

	const dot = document.createElement("div");
    dot.classList.add("dot");
	dots.appendChild(dot)

}

// dot selected

if i = number


