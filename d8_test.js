
testRunner.waitUntilDone();

async function run(file) {
  print('reading: ' + file);

  let load_start = performance.now();
  let buf = readbuffer(file);
  print(`... end: ${performance.now() - load_start} ms,` +
        ` ${buf.byteLength} bytes`);

  print('compiling:');
  let compile_start = performance.now();
  await WebAssembly.compile(buf);

  print(`... end: ${performance.now() - compile_start} ms`);
}

(async () => {
  for (let x of arguments) {
    try {
      await run(x);
    } catch (e) {
      print(e);
    }
  }
})().finally(() => {
  testRunner.notifyDone();
});
