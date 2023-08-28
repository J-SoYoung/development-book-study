// 스코프 
// 함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있고
// 함수 몸체 외부에서는 참조할 수 없다.
// 매개변수의 유효범위 = 스코프가 함수 몸체 태부로 한정되기 때문

// < 예제1 >-----------------------------------------------
// 매개변수는 함수 몸체 내부에서만 참조할 수 있다. 
// 매개변수의 스코프는 = 함수 몸체 내부다.

function add(x,y){
  // console.log('예제1(함수 안):', x,y)
  return x + y
}
add (2,5)
// console.log('예제1(함수 밖):', x,y) 
// 함수 외부에서 내부의 변수를 참조하려고 하니 Error뜸



// < 예제2>-----------------------------------------------
// 변수는 코드블록, 함수 몸체 내에서도 선언할 수 있다. (중첩 가능)

var var1 = 1; //전역변수

if (true){
  var var2 = 2; //코드 블록에서 변수 선언
  if(true){
    var var3 = 3; //중첩 코드블록에서 변수 선언
  }
}

function foo(){ 
  var var4 = 4; // 함수 내에서 변수 선언
  console.log('함수안', var4)
  bar()

  function bar(){ //중첩 함수 내에서 변수 선언
    var var5 = 5;
    console.log('함수안', var5)
  }
}

console.log(var1) //1, 전역변수 = 무조건 출력
console.log(var2) //2, if통과-> var2에 2의 값이 할당 + 출력
console.log(var3) //3
// Q - var2,3
// if문의 조건이 false일때 -> 결과값은? , why? 
// undefined (var와 관련) : 선언과 초기화가 이루어졌기 때문에 
// if를 통과하지 못해 값을 할당하지 못했더라도 콘솔에 결과값이 출력됨

// Q - var2,3
// var가 아닌 let으로 변수가 선언되었다면 결과값은? why?
// ReferenceError (let스코프 관련) : 
// let은 블록레벨 스코프라 if문 안에서만 출력이 가능하기 때문에
// 함수밖에서 출력하면 참조에러가 뜬다. 
// 하지만 var는 함수범위 스코프여서 if문의 블록은 큰 위력이 없어
// 2,3의 결과값을 출력할 수 있다

foo()
console.log(var4) //ReferenceError
// Q - var4
// var4는 함수 스코프 안에 있기 때문에 함수밖에서 출력하면 에러가 뜬다.
// var4를 출력하기 위해서는 먼저 함수 호출이 되어야 하고,
// var4를 선언한 함수 안에서 콜솔을 출력해봐야 한다.

bar()  //ReferenceError
console.log(var5) //ReferenceError
// Q - var5
// var5는 함수 스코프 안에 있기 때문에 함수밖에서 콘솔을 출력하면 에러.
// bar()함수 전역 호출? ReferenceError : 함수스코프 안에서 호출해야 한다.
// foo()에서 bar() 함수 호출 : OK 
// bar()함수는 foo()함수 내부에 있으므로, foo함수 내에서 호출해야 한다.
