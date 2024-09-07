function buildTree(tree) {
	let currentNode = null;
	const { type, cssClasses, attributes, children } = tree;

	if (type === 'text') {
		currentNode = document.createTextNode(tree.value);
	} else {
		currentNode = document.createElement(type);

		if (cssClasses?.length > 0) {
			currentNode.classList.add(...cssClasses);
		}

		if (attributes?.length > 0) {
			for (const { name, value } of attributes) {
				currentNode.setAttribute(name, value);
			}
		}

		if (children?.length > 0) {
			for (const child of children) {
				currentNode.appendChild(buildTree(child));
			}
		}
	}

	return currentNode;
}

