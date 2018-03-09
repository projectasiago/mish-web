# Mish Web

This allows you to run Mish code in your browser using WebAssembly.

## Building

First, to make it easier, I suggest you run this build inside the wasm32 build environment. To do this, enter into the [buildenv](../buildenv) directory and run `make wasm32-unknown-unknown`. Then once inside the container, enter into the `mish-web` directory.

To build the project, simply run `make`. The output is produced in the `dist` directory.