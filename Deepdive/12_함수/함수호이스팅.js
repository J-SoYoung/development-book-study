// 함수 호이스팅
// 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다.

// 런타임 이전에 자바스크립트 엔진에 의해 함수 객체가 먼저 생성되고 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성한 뒤 함수 객체를 할당한다.

// console.log(add(2, 5)); // 7
// // 함수 선언문
// function add(x, y) {
//   return x + y;
// }

console.log(sub(2, 5)); // add2 is not defined
// 함수 표현식
var sub = function add2(x, y) {
  return x + y;
};

// console.log(sub(2, 5));
