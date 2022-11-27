// var변수의 문제점
// 1.변수 중복 선언 허용  2.함수 레벨 스코프  3.변수 호이스팅

// 1. 변수 중복선언 허용
var x = 1;
var y = 1;

var x = 100;
var y;

// let a = 1;
// let a = 3;  //변수 이미 선언됐다 Error뜸

// console.log(a) //Identifier 'a' has already been declared 
// console.log(x)
// console.log(y)

// let은 변수를 중복선언 할 경우 Error가 뜨지만
// var는 중복 선언이 허용된다. ( 왜 ㅡㅡ ? ㅋㅋ)

//---------------------------------------------------------
// var호이스팅
// 근데 이제 var는 안쓰는데, 이 개념이 중요한가여??? 
// 현업에서... 중요한가? .. (그냥 궁금.)


let foo = 1;
{d
  let foo = 2;
  let bar = 3;
  console.log(bar)
}
console.log(foo)
// console.log(bar)
// bar는 블록 안에서만 살아있다! { 안에서 } 출력해줘야 한다.
