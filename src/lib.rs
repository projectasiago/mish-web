#![feature(proc_macro)]

extern crate wasm_bindgen;
extern crate projectasiago_mish as mish;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
	fn alert(message: &str);
}

#[wasm_bindgen]
pub fn greet(input: &str) {
	alert(&format!("Input: {}. Mish: {}", input, mish::hello_world()));
}