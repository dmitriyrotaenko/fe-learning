const incrementBtn = document.querySelector('.counter__increment-btn');
const decrementBtn = document.querySelector('.counter__decrement-btn');
const counterElement = document.querySelector('.counter__value');

let counterValue = 0;
renderValue();

incrementBtn.addEventListener('click', () => {
	counterValue++;
	renderValue();
});

decrementBtn.addEventListener('click', () => {
	if(counterValue === 0) return;

	counterValue--;
	renderValue();
});

function renderValue() {
	counterElement.innerHTML = String(counterValue);
}



