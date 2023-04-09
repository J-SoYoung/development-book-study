// const는 재할당이 금지된 변수다. 하지만 그것이 불변을 의미하는 것은 아니다.
// const안에 어떤 값이 할당되었느냐에 따라 원시값이면 값을 바꿀 수 없고, 객체값이면 값을 바꿀 수 있다.

// const에 객체 할당하기
const person = {
  name: "Lee",
};
console.log(person); // {name: "Lee"}
person.name = "Kim";

console.log(person); // {name: "Kim"}

// const에 원시값 할당하기
const num = 100;
console.log(num); // 100 
num = 20;
console.log(num); // TypeError: Assignment to constant variable.
