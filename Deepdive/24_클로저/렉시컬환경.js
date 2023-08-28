// 렉시컬 환경은 함수가 선언된 시점에 결정된다. 
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); //1
bar(); //1
