// 자기 자신을 호출하는 함수 
// 재귀함수는 반복되는 처리를 위해 사용한다.

// https://ko.javascript.info/recursion
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
// console.log( pow(2, 3) ); // 8

// // 위의 코드를 줄임
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}


// DeepDive
// for문을 이용해 10-0까지 출력  
function countDown(n){
  for (var i = n; i >= 0 ; i--){console.log(i)}}
// countDown(10)

// 재귀함수를 이용해 위와 같은 결과 출력
function countDowns(n){
  if(n < 0) return
  // 재귀함수는 자신을 무한 재귀 호출한다. 
  // 따라서 재귀함수 내에는 재귀 호출을 멈출 수 있는 
  // 탈출조건을 반드시 만들어야 한다
    console.log(n)
    countDowns(n - 1)
}
// countDowns(10)

// 팩토리얼은 1부터 자기 자신까지 모든 양의 정수의 곱이다
function factorial(n){
  if(n <= 1) return 1; 
  return n * factorial(n - 1);
}
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))


// 모던JS - 주어진 숫자까지의 모든 숫자 더하기
function sumTo(n){
  if(n == 1) return 1;
  return n + sumTo(n - 1)
}
console.log(sumTo(100))


