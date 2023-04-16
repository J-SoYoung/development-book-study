// 생성자 함수
function Circle(radius) {
  // 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
  // 함수가 new 연산자와 함께 호출되었다면 자기 자신을 가리킨다. Function: Circle1
  console.log(new.target);

  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle2 = Circle(10);

// console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 10
