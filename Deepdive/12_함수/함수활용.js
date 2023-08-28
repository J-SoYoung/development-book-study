// function repeat2(n) {
//   for (let i = 0; i < n; i++) {
//     if (i % 2) console.log("기본", i);
//   }
// }
// repeat2(5);

function repeat(n, f) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}
let logAll = function (i) {
  console.log(i);
};
repeat(5, logAll);

let logOdds = function (i) {
  if (i % 2 === 0) console.log("짝수", i);
};
repeat(5, logOdds);
