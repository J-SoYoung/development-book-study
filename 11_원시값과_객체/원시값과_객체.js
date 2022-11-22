// 원시값과 객체의 변경

// const키워드를 사용해 선언한 변수는 재할당이 금지된다. 
// 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const키워드를 사용해 선언한 변수에 할당한 원시값(상수)은 변경할 수 없다.
// const로 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
o.b = 1;
// console.log(o.a === o.b)
// { a: 1, b: 1 }

// 문자열과 불변성
var str1 = ''
var str2 = 'hello'
// console.log(str2)

str2 = 'world'
// console.log(str2)

//  유사배열객체
var str = 'string';
// console.log(str[0])


// 값에 의한 전달

let score = 80;
let copy = score;

console.log(score);// 80
console.log(copy);// 80

// copy변수에 score를 할당했을 때 score변수의 값이 복사되어 할당된다. 
// 숫자값 80을 갖는 것은 동일하나, score변수와 copy변수의 값 80은 다른 메모리 공간에 저장된 별개의 값이다.
console.log(score === copy) //true

score = 100;
console.log(score);// 100
console.log(copy);// 80