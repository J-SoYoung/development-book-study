// 산술 연산자
console.log(5 * 4); // -> 20

// 문자열 연결 연산자
console.log("My name is " + "Lee"); // -> 'My name is Lee'

// 할당 연산자
console.log((color = "red")); // -> 'red'

// 비교 연산자
console.log(3 > 5); // -> false

// 논리 연산자
console.log(true && false); // -> false

// 타입 연산자
console.log(typeof "Hi"); // -> string

// -----------------------------------

// 산술연산자 - 이항 산술 연산자
console.log(5 + 2); // -> 7
console.log(5 - 2); // -> 3
console.log(5 * 2); // -> 10
console.log(5 / 2); // -> 2.5
console.log(5 % 2); // -> 1

// 산술연산자 - 단항 산술 연산자
var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1

// -연산자는 양수를 음수로, 음수를 양수로 반전한 값을 반환한다.
// 하지만 +연산자는 어떠한 효과도 없다.
console.log(-x);

// -------------------------------

var x = 5,
  result;

// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당 (prefix decrement operator)
result = -x;
console.log(typeof result, x); // 5 5

// -----------------------------------------
var x  = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1

// 부수 효과는 없다.
console.log(x);  // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1

// 부수 효과는 없다.
console.log(x);  // true

// 불리언 값을 숫자로 타입 변환한다.
x = false;
console.log(+x); // 0

// 부수 효과는 없다.
console.log(x);  // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x); // NaN

// 부수 효과는 없다.
console.log(x);  // "Hello"