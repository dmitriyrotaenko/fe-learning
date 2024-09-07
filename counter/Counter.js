class Counter {
	static #counterTree = {
		type: 'div',
		cssClasses: ['counter'],
		children: [
			{
				type: 'h1',
				cssClasses: ['counter__heading'],
				children: [
					{ type: 'text', value: 'Click count: ' },
					{
						type: 'span',
						cssClasses: ['counter__value'],
						attributes: [{ name: 'data-counter-polarity', value: 'zero' }],
						children: [{ type: 'text', value: '0' }]
					}
				]
			},
			{
				type: 'div',
				cssClasses: ['counter__btns'],
				children: [
					{
						type: 'div',
						cssClasses: ['counter__actions'],
						children: [
							{ 
								type: 'button',
								cssClasses: ['counter__increment', 'btn'],
								children: [{ type: 'text', value: '+' }]
							},
							{ 
								type: 'button',
								cssClasses: ['counter__decrement', 'btn'],
								children: [{ type: 'text', value: '-' }]
							}
						]
					},
					{
						type: 'hr'
					},
					{
						type: 'div',
						cssClasses: ['counter__actions'],
						children: [
							{ 
								type: 'button',
								cssClasses: ['counter__reset', 'btn'],
								children: [{ type: 'text', value: 'Reset' }]
							}
						]
					}
				]
			}
		]
	}

	constructor(parent) {
		this.parent = parent || document.body;
		this.tree = buildTree(Counter.#counterTree);
		this.counterValue = 0;
		this.MAX_VALUE = 4;
		this.MIN_VALUE = -3;

		this.counterElement = this.tree.querySelector('.counter__value');
		this.incrementer = this.tree.querySelector('.counter__increment');
		this.decrementer = this.tree.querySelector('.counter__decrement');
		this.resetter = this.tree.querySelector('.counter__reset');
		
		this.init();
	}

	init() {
		this.parent.appendChild(this.tree);
		this.#applyListeners();
	}

	increment = () => {
		if(this.counterValue < this.MAX_VALUE) {
			this.counterValue++;
			this.renderValue();
		} else {
			this.incrementer.disabled = true;
			this.resetter.disabled = true;
			new Counter(this.parent);
		}
	}

	decrement = () => {
		if(this.counterValue > this.MIN_VALUE) {
			this.counterValue--;
			this.renderValue();
		} else {
			this.destroy();
		}
	}

	reset = () => {
		this.counterValue = 0;
		this.renderValue();
	}

	renderValue() {
		const newValue = String(this.counterValue);
		this.counterElement.innerText = newValue;
		this.#paintValue();
	}

	destroy() {
		this.parent.removeChild(this.tree);
		this.#removeListeners();
	}

	#paintValue() {
		if(this.counterValue === 0) {
			this.counterElement.setAttribute('data-counter-polarity', "zero");
		} else if(this.counterValue > 0) {
			this.counterElement.setAttribute('data-counter-polarity', "positive");
		} else {
			this.counterElement.setAttribute('data-counter-polarity', "negative");
		}
	}

	#applyListeners() {
		this.incrementer.addEventListener('click', this.increment);
		this.decrementer.addEventListener('click', this.decrement);
		this.resetter.addEventListener('click', this.reset);
	}

	#removeListeners() {
		this.incrementer.removeEventListener('click', this.increment);
		this.decrementer.removeEventListener('click', this.decrement);
		this.resetter.removeEventListener('click', this.reset);
	}
}

