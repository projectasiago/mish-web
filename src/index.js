import * as mish_web from "./mish-web.ts";

const js = import("../target/mish_web");
js.then(function (js) {
	for (var name in js) {
		window[name] = js[name];
	}
	mish_web.start();
});