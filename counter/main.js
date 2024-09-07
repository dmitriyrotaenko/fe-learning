// const incrementBtn = document.querySelector('.counter__increment');
// const decrementBtn = document.querySelector('.counter__decrement');
// const resetBtn = document.querySelector('.counter__reset');
// const footerDate = document.querySelector('.footer__date');

// const counterElement = document.querySelector('.counter__value');
// const counterColorAttr = 'data-counter-polarity';
// const COUNTER_COOKIE = 'counter';

// footerDate.innerText = new Date().getFullYear();
// let counterValue = Number(getCookieValueByName(COUNTER_COOKIE)) || 0;

// renderValue();

// incrementBtn.addEventListener('click', () => {
// 	counterValue++;
// 	renderValue();
// });

// decrementBtn.addEventListener('click', () => {
// 	counterValue--;
// 	renderValue();
// });

// resetBtn.addEventListener('click', () => {
// 	counterValue = 0;
// 	renderValue();
// });

// function renderValue() {
// 	const newValue = String(counterValue);
// 	counterElement.innerText = newValue;
// 	setCookie(COUNTER_COOKIE, newValue);
// 	paintCounter();
// }

// function paintCounter() {
// 	if(counterValue === 0) {
// 		counterElement.setAttribute(counterColorAttr, "zero");
// 	} else if(counterValue > 0) {
// 		counterElement.setAttribute(counterColorAttr, "positive");
// 	} else {
// 		counterElement.setAttribute(counterColorAttr, "negative");
// 	}
// }


const initialCounter = new Counter(document.querySelector('.counters'));


