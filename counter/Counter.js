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
				type: 'dev',
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
								cssClasses: ['counter__increment', 'btn'],
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

		this.init();
	}

	init() {
		this.parent.appendChild(this.tree);
	}
}

