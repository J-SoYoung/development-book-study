// 지역변수 생명주기(1)
// 지역변수는 x는 foo함수가 호출되기 이전까지는 생성되지 않는다.

function foo() {
  var x = "local";
  console.log(x); // local
  return x;
}

foo();
console.log(x); // ReferenceError: x is not defined


// 지역변수 생명주기(2)

var x2 = "global";

function foo2() {
  console.log(x2); // ①
  var x2 = "local";
}

foo2();
console.log(x2); // global
