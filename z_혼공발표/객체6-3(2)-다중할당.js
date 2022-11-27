//구조분해할당 294p


// 1 ) 구조분해할당 - 배열
let [ a , b ] = [ 1, 2 ]
console.log(a,b) // a는 1, b는 2가 할당됨


// 2 ) 구조분해할당 - 객체
const object = {
  name : '혼자공부하는 자바스크립트',
  price : 1000,
  publisher : '한빛미디어'
}

// 객체에서 변수를 추출한다
const { name, price } = object
console.log( name, price ) // object객체 안의 name,price의 속성을 그대로 출력함



