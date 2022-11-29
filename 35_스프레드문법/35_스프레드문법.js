// 스프레드문법 
console.log('스프레드연산자 : ', ...[1,2,3])
// 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 
// (전개, 분산) 개별적인 값들의 목록으로 만드는 것.


// 함수 호출문에서 스프레드 문법의 예
const arr = [1,2,3]
const max = Math.max(arr) 
console.log( 'Math메서드 + 배열 : ', max) // NaN
// arr는 숫자가 아닌 배열(객체)이기 때문에 Math메소드가 인식X

const max2 = Math.max(...arr)
console.log('Math메서드 + 스프레드문법 : ', max2)
