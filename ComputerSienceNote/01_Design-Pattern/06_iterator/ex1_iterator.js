// 'Array --------------'
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item);              // 1  2  3
}

const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next());  // { value: 1, done: false }
console.log(arrIterator.next());  // { value: 2, done: false }
console.log(arrIterator.next());  // { value: 3, done: false }
console.log(arrIterator.next());  // { value: undefined, done: true }


// 'Map ----------------'
// 키-값의 쌍을 저장하는 객체
const map = new Map([[0, 1], [1, 2], [2, 3]])
const mapIterator = map[Symbol.iterator]();
mapIterator.next();               // next was already called once, 

for (const item of mapIterator) { // only rest items called here
  console.log(item);  // [1,2]  [2,3]
}

console.log(mapIterator.next());  // {value: undefined, done: true}


// 'Set ----------------'
// 중복을 허용하지 않는 값의 집합
const set = new Set([1, 2, 3]);

const setIterator = set[Symbol.iterator]();
for (const item of setIterator) { // We can use iterator in [for...of]
  console.log(item);              // 1  2  3
}