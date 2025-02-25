"use strict";

const filesize = 25 * 1024 * 1024;
const funcs = 500000;
const operators = filesize / 3 / funcs;
const singleFunc = false;

console.log("(module");

for(let i = 0; i < funcs; i++) {
    console.log(`    (func $f${i} (param $lhs i32) (param $rhs i32) (result i32)
        get_local $lhs`);
    for(let j = 0; j < operators; j++) {
        console.log("        get_local $rhs");
        console.log("        i32.add");
    }
    if(funcs > 100000 && i % (((funcs/100000)|0)+1) != 0) {
        console.log(`    )`);
    } else {
        console.log(`    ) (export "f${i}" (func $f${i}))`);
    }
    if(singleFunc) {
        break;
    }
}

console.log(")");

