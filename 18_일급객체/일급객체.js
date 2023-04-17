function multiply(x, y) {
  console.log(arguments);
  return x + y;
}

console.log(multiply()); // NaN
console.log(multiply("가")); // NaN
console.log(multiply("가", "나")); // 2
console.log(multiply("가", "나", "다")); // 2
