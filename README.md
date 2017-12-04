# How to use

## On browser

```
node generator.js > huge.wast
wat2wasm -o huge.wasm huge.wast
python -m SimpleHTTPServer &
open http://localhost:8000/test.html
```

## On V8 debug shell

```
d8 d8_test.js -- 100000-functions.wasm
d8 d8_test.js -- 500000-functions.wasm
d8 d8_test.js -- single-function.wasm
```

## On V8 debug shell plus new compiler

```
d8 --liftoff d8_test.js -- 100000-functions.wasm
d8 --liftoff d8_test.js -- 500000-functions.wasm
d8 --liftoff d8_test.js -- single-function.wasm
```
