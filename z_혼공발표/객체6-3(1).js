// 객체를 JSON으로 생성한 것
const object = {
  name : '혼자공부하는 자바스크립트',
  price : 1000,
  publisher : '한빛미디어'
}

// 객체의 기본 속성을 지정
object.name = object.name !== undefined ? object.name : '제목 미정'
object.author = object.author !== undefined ? object.author : '저자 미상'

console.log(object)
console.log(JSON.stringify(object)) 
// console.log로 값을 확인해 볼 수는 있지만 브라우저에서 값을 활용하려면 
// stringify를 사용해서 출력해야 데이터를 밖으로 꺼내서 사용할 수 있다
// (웹개발 종합반, for문을 사용해서 html에 값을 넣어주는 것처럼)



