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


let arrowLeft = document.querySelector("#banner .arrow_left");
console.log(arrowLeft);

let arrowRight = document.querySelector("#banner .arrow_right");
console.log(arrowRight);


// affiche un point
let baliseImage = document.querySelector(".dots");
baliseImage.classList.add("dot")

// afficher 4 points

for (let i = 0; i < slides.length; i++) {

	let baliseImage = document.querySelector(".dots");
	baliseImage.classList.add("dot")
	
}
