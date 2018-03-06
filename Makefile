.PHONY:
all: build-release

.PHONY:
build:
	@cargo build --target wasm32-unknown-unknown
	@wasm-bindgen target/wasm32-unknown-unknown/release/mish_web.wasm --out-dir target
	@npm install
	@npm run build
	@cp src/index.html dist/index.html

.PHONY:
build-release:
	@cargo build --release --target wasm32-unknown-unknown
	@wasm-bindgen target/wasm32-unknown-unknown/release/mish_web.wasm --out-dir target
	@npm install
	@npm run build -p
	@cp src/index.html dist/index.html

.PHONY:
clean:
	@rm -rf build target dist