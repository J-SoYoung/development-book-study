// 스택 클래스 정의
class Stack {
  constructor() {
    this.items = []; // 스택 요소를 저장할 배열
  }

  // 스택에 요소 추가
  push(element) {
    this.items.push(element);
  }

  // 스택에서 요소 제거하고 반환
  pop() {
    if (this.isEmpty()) {
      return undefined; // 스택이 비어있으면 undefined 반환
    }
    return this.items.pop();
  }

  // queue 구현, 제일 처음의 요소 제거하고 반환
  shift() {
    if (this.isEmpty()) {
      return undefined; // 스택이 비어있으면 undefined 반환
    }
    return this.items.shift();
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 맨 위 요소 반환
  peek() {
    if (this.isEmpty()) {
      return undefined; // 스택이 비어있으면 undefined 반환
    }
    return this.items[this.items.length - 1];
  }

  // 스택의 크기 반환
  size() {
    return this.items.length;
  }

  // 스택 내용 출력
  print() {
    console.log(this.items);
  }
}

// 스택 사용 예시
const stack = new Stack();
stack.push("사과");
stack.push("바나나");
stack.push("체리");
stack.push("메론");
stack.print(); // 출력: ["사과", "바나나", "체리", "메론"]

// console.log("stack구현 마지막 요소 제거-pop : ", stack.pop()); // 가장 마지막에 쌓인 것 빼기
// stack.print();

console.log("queue구현 처음 요소 제거-shift : ", stack.shift()); // 가장 처음에 쌓인 것 빼기
stack.print();

// console.log(stack.peek()); // 출력: "바나나"
// console.log(stack.size()); // 출력: 2
// console.log(stack.isEmpty()); // 출력: false
