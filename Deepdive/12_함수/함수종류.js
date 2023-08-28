// 함수 선언문(function statement)
// 이름을 생략할 수 없다. 
// 완료값: undefined
// 표현식이 아닌 문은 값으로 표현될 수 없다.
// 함수 선언문은 변수에 선언할 수 없으므로 값으로 평가될 수 없다 
// 함수 선언문이 표현식인 문이라면, 완료값이 함수로 출력돼야 한다.
function add_statement(x,y) {
  return x+y
}

// 함수 표현식(function expression)
// 함수 리터럴로 생성한 함수객체는 변수에 담을 수 있다.
// 함수를 값처럼 자유롭게 사용할 수 있다. = 일급객체이다
// 변수에 할당 가능, 프로퍼티 값 될 수 있음, 배열 요소도 가능
var add_expression = function(x,y) {
  return x+y
};

// 함수 생성자(arg1,arg2,..,argN,본문)
// new 연산자와 함께 호출하면 함수 객체를 생성해서 반환한다
// 클로저 생성X, 함수선언 / 표현식과 다르게 동작한다
var add_construction = new Function('x','y','return x+y')

// 화살표함수
// function키워드 대신 => 를 사용해 간략하게 함수 선언 (동작도 간략화)
// 항상 익명함수로 작성한다. 
// 생성자 함수로 사용할 수 없고, 기존 함수와 this바인딩 방식이 다르다 
// 프로토타입 프로퍼티가 없고, arguments 객체를 생성하지 않는다
var add = (x,y) => x + y;