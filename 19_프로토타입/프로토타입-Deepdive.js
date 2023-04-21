// Object 생성자 함수에 의해 생성된 
// obj 객체는 Object.prototype을 상속받는다.
const obj = new Object();
obj.x = 1;

console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true
console.dir(obj);

// 사용자 정의 생성자 함수에 의해 생성된 
// kim객체는 Person생성자 함수의 prototype을 상속받는다.
// kim객체의 프로퍼티에는 존재하지 않지만 => kim.hasOwnProperty('sayHello')); // false
// Person생성자 함수의 프로토타입도 상속받아 사용할 수 있다. => kim.sayHello(); // "Hello, I'm Kim."

// 그 이유는 프로토타입체인에 의해서 해당 생성자 함수의 프로퍼티 뿐만 아니라
// 생성자함수의 프로토타입 객체에서 상속받은 프로퍼티와 메서드도 사용할 수 있다. 
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}.`);
}

let kim = new Person('Kim');
kim.sayHello(); // "Hello, I'm Kim."

console.log(kim.hasOwnProperty('name')); // true
console.log(kim.hasOwnProperty('sayHello')); // false
console.log(Person.prototype.hasOwnProperty('sayHello')); // true
console.log(kim.constructor === Person); // true