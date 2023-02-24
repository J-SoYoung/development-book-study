// 아직 this바인딩을 다 이해하기는 힘들군요. 다음번에 한번더 보자

// apply, call, bind메서드는 function.prototype메서드다.
// 모든 함수가 상속받아 사용할 수 있다. 

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 
// getThisBinding 함수의 this에 바인딩한다. 

// apply 메서드: 호출할 함수의 인수를 배열로 묶어 전달.
//  call 메서드: 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달.

function getThisBinding() {
  console.log(arguments);
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
console.log(getThisBinding.call(thisArg, 1, 2, 3));



// // bind 메서드는 첫 번째 인수로 전달한 thisArg로 this 바인딩이 교체된
// // getThisBinding 함수를 새롭게 생성해 반환한다.
// function getThisBinding() {
//   return this;
// }

// // this로 사용할 객체
// const thisArg = { a: 1 };
// console.log(getThisBinding.bind(thisArg)); // getThisBinding
// // bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
// console.log(getThisBinding.bind(thisArg)()); // {a: 1}
