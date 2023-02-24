
// 1. 일반 함수 호출
// 'use strict'모드를 사용하면 => foo's this:  undefined
function foo() {
  'use strict'
  console.log("foo's this: ", this);  // foo's this: window , Object [global]
  function bar() {
    console.log("bar's this: ", this); // bar's this: window , Object [global]
  }
  bar();
}
foo();

// 2. 메서드 호출
// 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다. = person에 바인딩된다.
const person = {
  name: 'Lee',
  getName() {
    return this.name;
  }
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()); // Lee


// 3. 생성자 함수 호출
// 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);

// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20