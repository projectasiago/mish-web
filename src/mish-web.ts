declare function greet(input: string): void;
declare function handle(input: string): void;

declare const window: any;
declare const document: any;
declare const WebSocket: any;
declare const console: any;

export function start() {
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
	
	websocket = new WebSocket("ws://127.0.0.1:2794", "rust-websocket");
	websocket.onmessage = function(event: any) {
		console.log(event);
		handle(event.data);
	};
	websocket.onclose = function(event: any) {
		console.log("websocket closed");
		console.log(event);
	};
	websocket.onerror = function(event: any) {
		console.log("websocket errored");
		console.log(event);
	};
	websocket.onopen = function(event: any) {
		console.log("websocket opened");
		console.log(event);
	}
}

let websocket: any;
function send(data: string): void {
	websocket.send(data);
}