
// var는 함수스코프이기 때문에
// for, if문에 상관없이 변수값을 참조할 수 있다.
var sum = 0;
for (var i = 0; i < 10; i++) {
  sum += i;
}
console.log("sum:", sum);
console.log("i:", i);

// let은 블록스코프이기 때문에
// for문 안에서만 j의 값을 참조할 수 있다.
let letSum = 0;
for (let j = 0; j < 10; j++) {
  letSum += j;
}
console.log("letsum:", letSum);
// console.log("j:", j); // j is not defined

// -----------------------------------------------------
var n = 1;
function test() {
  console.log(n); // undefined
  var n = 2;
  console.log(n); // 2
}
test();

let n2 = 1;
function test2() {
  console.log(n2); // 참조Error
  let n2 = 2;
  console.log(n2); // 2
}
test2();
