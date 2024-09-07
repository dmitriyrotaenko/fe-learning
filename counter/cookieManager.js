function setCookie(name, value, attrs) {
	const attributes = {
		path: '/',
		...attrs
	}

	let newCookie = `${name}=${value}`;

	for(const attr in attributes) {
		newCookie += `; ${attr}=${attributes[attr]}`; 
	}

	document.cookie = newCookie;
}

function getCookieValueByName(name) {
	return document.cookie
		.split(';')
		.find(cookie => cookie.trim().startsWith(`${name}=`))
		?.split('=')[1];
}

