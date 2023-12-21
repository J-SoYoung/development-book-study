import {singletonCounter} from "./counter.mjs";

export function file2Counter() {
    singletonCounter.decrement();
    console.log('file2-Counter',singletonCounter.getCount()); 

}