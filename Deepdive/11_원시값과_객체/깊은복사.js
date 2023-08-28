// 객체의 형태 - 깊은복사 해보기 

const arr2 = [1, 2, 3, { name: "name" }];

// 깊은복사 JSON.parse(JSON.stringify(object))
const copy2 = JSON.parse(JSON.stringify(arr2))

// 큰 집은 새 메모리에 각각 저장됨
console.log(arr2 === copy2); //false

// 객체에 동적으로 값을 할당해 준다
copy2[3].name = "thdud";

// 원본객체와, copy의 값은 다르다. = 깊은복사가 된것
console.log(copy2[3]);  //{ name: 'thgml' }
console.log(arr2[3]);   //{ name: 'name' }
console.log(copy2[3] === arr2[3]); // false


// JSON 객체의 메소드를 이용해서 Deep Copy를 할 수 있다.
// JSON.stringify : 자바스크립트 객체를 JSON 문자열로 변환
// JSON.parse : JSON 문자열을 자바스크립트 객체로 변환
// JSON 문자열로 변환했다가 다시 객체로 변환해주기 때문에 객체에 대한 참조가 없어지는 것이다.

// 이 방법의 문제점
// 다른 방법에 비해서 성능적으로 느리다
// JSON.stringify 메소드가 function을 undefined로 처리한다. 
// 따라서 p2에서는 sayHello 라는 함수가 복사되지 않았다.

