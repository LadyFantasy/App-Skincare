fetch('https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});