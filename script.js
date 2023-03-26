let toKzt = document.getElementById('toKzt');
let toUsd = document.getElementById('toUsd');
let toEur = document.getElementById('toEur');

function calc() {
	let amount = document.getElementById('amount');

	if (document.getElementById('kzt').selected) {
		toKzt.innerText = (amount.value * 1).toFixed(2);
		toUsd.innerText = (amount.value * 0.00232).toFixed(2);
		toEur.innerText = (amount.value * 0.0018446).toFixed(2);
	}

	if (document.getElementById('usd').selected) {
		toKzt.innerText = (amount.value * 429).toFixed(2);
		toUsd.innerText = (amount.value * 1).toFixed(2);
		toEur.innerText = (amount.value *0.84283).toFixed(2);
	}

	if (document.getElementById('eur').selected) {
		toKzt.innerText = (amount.value * 507).toFixed(2);
		toUsd.innerText = (amount.value * 1.176335).toFixed(2);
		toEur.innerText = (amount.value * 1).toFixed(2);
	}
}