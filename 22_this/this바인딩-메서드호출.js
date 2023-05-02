const person = {
  name: "Lee",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    return this.name;
  },
};

const anotherPerson = {
  name: "Kim",
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
// getName 메서드를 호출한 객체는 anotherPerson이다.
anotherPerson.getName = person.getName;
console.log(anotherPerson.getName()); // Kim

// getName 메서드를 변수에 할당하여 일반 함수로 호출
// 일반함수로 호출된 getName 함수의 this.name은 전역객체의 프로퍼티와 같다.
const getName = person.getName;
console.log(getName()); // '' = window.name의 값' '과 같다

