// 자기 자신을 호출하는 함수
// 재귀함수는 반복되는 처리를 위해 사용한다.

// https://ko.javascript.info/recursion
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
// console.log(pow(2, 3)); // 8

// 모던JS - 주어진 숫자까지의 모든 숫자 더하기
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
// console.log(sumTo(100));

// DeepDive
function countDown(n) {
  for (var i = n; i >= 0; i--) {
    console.log(i);
  }
}
// countDown(10);

// 재귀함수를 이용해 위와 같은 결과 출력
// 재귀함수는 자신을 무한 재귀 호출한다.
// 따라서 재귀함수 내에는 재귀 호출을 멈출 수 있는
// 탈출조건을 반드시 만들어야 한다
function countDowns(n) {
  if (n < 0) return;
  console.log(n);
  countDowns(n - 1);
}
// countDowns(10);

// 팩토리얼은 1부터 자기 자신까지 모든 양의 정수의 곱이다
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))

// 함수 표현식
// 함수를 가리키는 식별자로 자기 자신을 재귀 호출
var factorial = function foo(n) {
  if (n <= 1) return 1;
  // return n * factorial(n - 1);

  // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
  console.log(factorial === foo); // true
  return n * foo(n - 1);
};

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
