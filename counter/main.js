const incrementBtn = document.querySelector('.counter__increment');
const decrementBtn = document.querySelector('.counter__decrement');
const resetBtn = document.querySelector('.counter__reset');

const counterElement = document.querySelector('.counter__value');

let counterValue = 0;
renderValue();

incrementBtn.addEventListener('click', () => {
	counterValue++;
	renderValue();
});

decrementBtn.addEventListener('click', () => {
	counterValue--;
	renderValue();
});

resetBtn.addEventListener('click', () => {
	counterValue = 0;
	renderValue();
});

function renderValue() {
	counterElement.innerText = String(counterValue);
}

