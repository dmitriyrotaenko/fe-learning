class Counter {
	constructor(parent) {
		this.parent = parent || document.body;
		this.counterValue = Number(getCookieValueByName('counter')) || 0;
		this.tree = document.querySelector('.counter-template').content.cloneNode(true);

		this.counterElement = this.tree.querySelector('.counter__value');
		this.incrementer = this.tree.querySelector('.counter__increment');
		this.decrementer = this.tree.querySelector('.counter__decrement');
		this.resetter = this.tree.querySelector('.counter__reset');

		this.init();
	}

	init() {
		this.parent.appendChild(this.tree);
		this.applyListeners();
		this.renderValue();
	}

	increment = () => {
		this.counterValue++;
		this.renderValue();
	}

	decrement = () => {
		this.counterValue--;
		this.renderValue();
	}

	reset = () => {
		this.counterValue = 0;
		this.renderValue();
	}

	renderValue() {
		const newValue = String(this.counterValue);
		this.counterElement.innerText = newValue;
		setCookie('counter', newValue);
		this.paintValue();
	}

	paintValue() {
		if(this.counterValue === 0) {
			this.counterElement.setAttribute('data-counter-polarity', "zero");
		} else if(this.counterValue > 0) {
			this.counterElement.setAttribute('data-counter-polarity', "positive");
		} else {
			this.counterElement.setAttribute('data-counter-polarity', "negative");
		}
	}

	applyListeners() {
		this.incrementer.addEventListener('click', this.increment);
		this.decrementer.addEventListener('click', this.decrement);
		this.resetter.addEventListener('click', this.reset);
	}
}

