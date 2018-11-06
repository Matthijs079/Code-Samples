fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10')
	.then(response => response.json())
	.then(function (data) {
		for (i = 0; i < 10; i ++) {
			const IMG = document.createElement("img");
			IMG.src = data.cards[i].image;
			IMG.classList.add('img__card');
		document.querySelectorAll(".img")[i].appendChild(IMG);
		}
		}
	)
	.catch(error => console.log('error is', error));




const button1 = document.querySelectorAll(".toggle")[0];
button1.addEventListener('click', function() {
	if (button1.getAttribute("data-text-swap") == button1.innerHTML) {
		button1.innerHTML = button.getAttribute("data-text-original");
	} else {
		button1.setAttribute("data-text-original", button1.innerHTML);
		button1.innerHTML = button.getAttribute("data-text-swap");
	}
}, false);

let button = document.querySelector(".toggle");
let cardstop = document.querySelector(".cardstop");
let allCards = document.querySelectorAll(".img");

button.addEventListener('click', function(){
	for (card of allCards){
		card.classList.remove('hidden');
	}

	cardstop.classList.toggle("hidden");
	button.classList.toggle().innerHTML = "Show the cards"
});

let showone = document.querySelector(".random");

showone.addEventListener('click', ()=>{
	const RANDOM_NUMBER = Math.floor(Math.random() * 9 );
	cardstop.classList.remove('hidden');

	for(card of allCards) {
		card.classList.add('hidden');
	}

	allCards[RANDOM_NUMBER].classList.remove('hidden');

});
