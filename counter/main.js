const incrementBtn = document.querySelector('.counter__increment');
const decrementBtn = document.querySelector('.counter__decrement');
const resetBtn = document.querySelector('.counter__reset');

const counterElement = document.querySelector('.counter__value');

const NEGATIVE_VALUE_CSS = 'counter__value-negative';
const POSITIVE_VALUE_CSS = 'counter__value-positive';
const ZERO_VALUE_CSS 		 = 'counter__value-zero';

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
	paintCounter();
}

function paintCounter() {
	counterElement.classList.toggle(ZERO_VALUE_CSS, counterValue === 0);
	counterElement.classList.toggle(POSITIVE_VALUE_CSS, counterValue > 0);
	counterElement.classList.toggle(NEGATIVE_VALUE_CSS, counterValue < 0);
}

// если каунтер боьлше 0 то зелёный, если меньше то красный

