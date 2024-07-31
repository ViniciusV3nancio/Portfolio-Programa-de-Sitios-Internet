let height = 0;
let width = 0;
let lifes = 1;
let timer = 15;

let createNyanCatTimer = 1500;

let level = window.location.search;
level = level.replace('?', '');

if(level === 'easy') {
	//2500
	createNyanCatTimer = 2500;
} else if(level === 'normal') {
	//2000
	createNyanCatTimer = 2000;
} else if (level === 'hard') {
	//1500
	createNyanCatTimer = 1500;
} else if (level === 'veryhard') {
	//1000
	createNyanCatTimer = 1000;
} else if (level === 'gato') {
	//750
	createNyanCatTimer = 750;
}

function adjustGameStageSize() {
	height = window.innerHeight;
	width = window.innerWidth;
}
adjustGameStageSize();

var stopwatch = setInterval(function() {
	timer -= 1;
	if(timer < 0) {
		clearInterval(stopwatch);
		clearInterval(createNyanCat);
		window.location.href = "win.html";
	} else {
		document.getElementById('timer').innerHTML = timer;
	}
}, 1000)

function randomPosition() {
	//remover o NyanCat anterior (caso exista)
	if(document.getElementById('NyanCat')) {
		document.getElementById('NyanCat').remove();
		if(lifes > 3) {
			window.location.href = "end-game.html";
		} else {
			document.getElementById('v' + lifes).src = "imagens/coracao_vazio.png";
			lifes++;
		}
	}
	let positionX = Math.floor(Math.random() * width) - 90;
	let positionY = Math.floor(Math.random() * height) - 90;
	positionX = positionX < 0 ? 0 : positionX;
	positionY = positionY < 0 ? 0 : positionY;

	//criar o elemento html - NyanCat
	let NyanCat = document.createElement('img');
	NyanCat.src = "imagens/NyanCat.png";
	NyanCat.className = randomSize() + ' ' + randomSide();
	NyanCat.style.left = positionX + 'px';
	NyanCat.style.top = positionY + 'px';
	NyanCat.style.position = 'absolute';
	NyanCat.id = 'NyanCat';
	NyanCat.onclick = function() {
		this.remove();
	}
	document.body.appendChild(NyanCat);
}

//Tamanho aleatório do NyanCat.
function randomSize() {
	let classe = Math.floor(Math.random() * 3);
	switch(classe) {
		case 0:
			return 'NyanCat1';
		case 1:
			return 'NyanCat2';
		case 2:
			return 'NyanCat3';
	}
}

//Local aleatório onde o NyanCat vai aparecer.
function randomSide() {
	let classe = Math.floor(Math.random() * 2)
	switch(classe) {
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB';
	}
}