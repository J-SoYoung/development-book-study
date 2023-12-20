import {file1Counter} from "./file1.mjs";
import {file2Counter} from "./file2.mjs";
import {singletonCounter} from "./counter.mjs";

function run() {
    file2Counter();
    file2Counter();
    file1Counter();
    console.log(singletonCounter.getCount()); // 2
}

run();