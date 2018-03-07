declare function greet(input: string): void;

declare const window: any;
declare const document: any;

export function start() {
	greet("JS");

	let htmlCanvas = document.getElementById("screen");
	let context = htmlCanvas.getContext("2d");
	
	window.addEventListener("resize", resizeCanvas, false);
	resizeCanvas();

	function redraw() {
		context.strokeStyle = "blue";
		context.lineWidth = "5";
		context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
	}

	function resizeCanvas() {
		htmlCanvas.width = window.innerWidth;
		htmlCanvas.height = window.innerHeight;
		redraw();
	}
}