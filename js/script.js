document.getElementById('calc').onclick = totalCost;

totalCost();

function totalCost() {
	const menu = document.getElementsByClassName('menu');
	let cost = 0;
	for (let i = 0; i < menu.length; i++) {
		if (menu[i].checked) {
			cost += parseFloat(menu[i].getAttribute('data-cost'));
		}
	}
	document.getElementById('cost').innerHTML = cost;
}