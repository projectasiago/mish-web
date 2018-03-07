declare function greet(input: string): void;
declare const window: any;
declare const document: any;

export function start() {
	greet("JS");
	
	let htmlCanvas = document.getElementById("screen");
	let context = htmlCanvas.getContext("2d");

	// Start listening to resize events and draw canvas.
	initialize();

	function initialize() {
		// Register an event listener to call the resizeCanvas() function 
		// each time the window is resized.
		window.addEventListener('resize', resizeCanvas, false);
		// Draw canvas border for the first time.
		resizeCanvas();
	}

	// Display custom canvas. In this case it's a blue, 5 pixel 
	// border that resizes along with the browser window.
	function redraw() {
		context.strokeStyle = 'blue';
		context.lineWidth = '5';
		context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
	}

	// Runs each time the DOM window resize event fires.
	// Resets the canvas dimensions to match window,
	// then draws the new borders accordingly.
	function resizeCanvas() {
		htmlCanvas.width = window.innerWidth;
		htmlCanvas.height = window.innerHeight;
		redraw();
	}
}