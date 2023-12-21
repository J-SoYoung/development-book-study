import {singletonCounter} from "./counter.mjs";

export function file1Counter() {
    singletonCounter.increment();
    singletonCounter.increment();
    singletonCounter.increment();
    console.log('file1-Counter',singletonCounter.getCount()); 

}