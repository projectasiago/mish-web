const js = import("../target/mish_web.js");

js.then(js => {
	js.greet("World!");
});