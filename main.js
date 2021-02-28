let button = document.querySelector("button");
let newDiv = document.createElement("div");
let body = document.querySelector("body");
newDiv.id = "dane-programisty";

button.addEventListener("click", function(){
	fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
	.then(response => response.json())
	.then(response =>{
			const p = document.createElement("p");
			p.innerHTML = `Imię: ${response.imie}<br> Nazwisko: ${response.nazwisko}<br> Zawód: ${response.zawod}<br> Firma: ${response.firma}`;
			newDiv.appendChild(p);
		body.appendChild(newDiv);
	});
});



