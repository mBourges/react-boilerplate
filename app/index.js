import React from 'react';
import ReactDOM from 'react-dom';

main();

function _generateAppContainerElement() {
	const app = document.createElement('div');

	app.setAttribute("id", "app");
	document.body.appendChild(app);
	
	return app;
}

function main() {
	const app = _generateAppContainerElement();

	ReactDOM.render(<HelloWorld />,
        app
    );
}