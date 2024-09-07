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
		this.#paintValue();
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
}

