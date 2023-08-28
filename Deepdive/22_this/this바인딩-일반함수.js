var value = 1;

const obj = {
  value: 100,
  foo() {
    // 일반함수 안의 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value), 100); // 100
  },
};

obj.foo();

// 메서드 호출
let boy = {
  name: "Mike",
  sayHello: ()=> {
    console.log(`hello, ${this.name}`);
  },
  // sayHello: function () {
  //   console.log(`hello, ${this.name}`);
  // },
};
boy.sayHello(); // hello, Mike
