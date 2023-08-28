// 유사배열객체
// 배열처럼 인덱스로 프로퍼티 값에 접근 가능하다
// length프로퍼티를 사용할 수 있다.
// for문을 순회할 수 있다.
// 하지만 이터러블 (순회가능한 자료구조 -ex배열) 이 아닌 객체라서 각 요소를 수정하기는 어렵다 

const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length:3 // length프로퍼티를 갖기 때문에 배열 비슷한 형태를 취함
}

// for문 순회 가능
for (let i=0; i<arrayLike.length; i++){
  console.log(arrayLike[i])
}

// const arr = Array.from(arrayLike)
// console.log(arr)



