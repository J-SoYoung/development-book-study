// 구조분해할당 = 디스트럭처링 할당 
// 구조화된 배열과 같은 객체를 비구조화(구조 파괴)하여 
// 1개 이상의 변수에 개별적으로 할당하는 것을 말한다
// 필요한 값만 추출하여 활용할 때 유용하다. 


// 1 ) 배열
let arr = [1, 2, 3]

let one = arr[0]
let two = arr[1]
let three = arr[2]

// 위 형태가 아래 형태로 바뀐 것이다.
// 변수 a,b를 선언하고, 배열 arr를 구조분해하여 할당한다
// 이때 할당의 기준은 배열의 인덱스이다. 
let [ a , b , c ] = arr
console.log('구조분해할당 :', a , b , c) 


// 2 ) 객체
const object = {
  name : '혼자공부하는 자바스크립트',
  price : 1000,
  publisher : '한빛미디어'
}

// 변수는 객체의 프로퍼티 키이다.
// 구조분해할당의 기준은 프로퍼티 키이다.
// object객체 안의 name,price의 속성을 그대로 출력함
const { name, price } = object
console.log( '구조분해할당 :', name, price )





