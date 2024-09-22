let id = 1;

class Counter {
	constructor(parent) {
		this.DEFAULT_VALUE = 0;
		this.MAX_VALUE = 3;

		this.id = id++;

		this.parent = parent || document.body;
		this.counterValue = Number(getCookieValueByName(`counter-${this.id}`)) || this.DEFAULT_VALUE;
		this.tree = document.querySelector('.counter-template').content.cloneNode(true);

		this.counterElement = this.tree.querySelector('.counter__value');
		this.incrementer = this.tree.querySelector('.counter__increment');
		this.decrementer = this.tree.querySelector('.counter__decrement');
		this.resetter = this.tree.querySelector('.counter__reset');

		this.init();
	}

	init() {
		this.parent.appendChild(this.tree);
		this.subscribeToEvents();
		this.renderValue();
	}

	increment = () => {
		if(this.counterValue === this.MAX_VALUE) {
			new Counter(this.parent);
			return;
		}

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
		setCookie(`counter-${this.id}`, newValue);
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

	subscribeToEvents() {
		this.incrementer.addEventListener('click', this.increment);
		this.decrementer.addEventListener('click', this.decrement);
		this.resetter.addEventListener('click', this.reset);
	}
}

