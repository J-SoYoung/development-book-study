// 정적 메서드와 프로토타입 메서드의 차이
// - 정적 메서드와 프로토타입 메서드는 자신이 속해있는 프로토타입 체인이 다르다
// - 정적 메서드는 클래스로 호출해야 하고, 프로토타입 메서드는 인스턴스에서 호출해야 한다
// - 정적 메서드는 인스턴스-프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스-프로퍼티를 참조할 수 있다.

class Square {
  // 정적 메서드
  static area(width, height) {
    return width * height;
  }

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 프로토타입 메서드
  protoArea() {
    return this.width * this.height;
  }
}

// 인스턴스 생성, 인스턴스 호출
const protoBox = new Square(30, 10);
console.log(protoBox.protoArea()); // 300
console.log(protoBox.area()); //  Error protoBox.area is not a function
// 정적메서드에 정의된 area는 class로 생성한 인스턴스인 protoBox에서 참조하지 못한다.

// 정적 메서드의 클래스 직접 호출
console.log(Square.area(10, 10)); // 100
console.log(Square.protoArea(10, 10)); // Error
// 정적메서드는 인스턴스의 프로퍼티를 참조할 수 없다
