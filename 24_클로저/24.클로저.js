// 예제1 
function makeAdder(x){
  return function (y){
    return x + y
  }
}
//함수 형태만 봤을 때, 
// makeAdder함수는 x를 매개변수로 받고, return값은 함수를 주고 있다.

const add3 = makeAdder(3) 
// add3에 담긴 값은 
// makeAdder에 매개변수3을 가지고, return값이 함수(x=3을 가진)인 것
// add3 = function(y){ return 3(매개변수) + y }

console.log(add3(2))
// add3의 값은 => function(y){ return 3 (x값 참조중) + y }
// add3에 매개변수 2를 넣으면 2는 매개변수 y에 들어가게 되는 거가 맞다
//  function(y){ return 3 (x값 참조중) + y }에 매개변수 2 =>  3 + 2 = 5


// ---------------------------------------------------------------------
// 예제2

const add10 = makeAdder(10);
//add10의 결과값은 function(y){return 10(상위f,매개변수) + y} 


console.log(add10(5))
// function(y){return 10(상위f,매개변수) + y} 함수에다가 매개변수 5가 들어가는 것
// 10 + 5 = 15 

console.log(add3(1))
// 아까 위의 add3의 결과값 add3 = function(y){ return 3(매개변수) + y }
// function(y){ return 3(매개변수) + y } 함수에 매개변수 1이 들어감
// 3 + 1 = 4


// ---------------------------------------------------------------------
function makeCounter() {
  let num = 0;  
  //은닉화가 이루어진거라는데... 마음대로 고칠 수 없다...일단. 

  return function (){
    return num++
  }
}

let counter = makeCounter();
// num=0을 가지고 있고, 결과값 익명함수 [ function (){return num++} ] 를 가짐
// return num++ num리턴하고 그다음에 ++하라는거 죠??

console.log(counter()); // 0출력하고 , ++ num = 1 , 음....... 음....
// makeCounter의 결과값이  [ function (){return num++} ]이고 
// 저 익명함수의 값이 num(계산된)이니까, return해서 상위 변수 num에 값이 들어간다. 
// 결론은 makeCounter는 num값을 기억하고있다..?
// 하............마지막 설명이 부족하군 ㅋㅋㅋㅋㅋㅋㅋ
console.log(counter()); // 1
console.log(counter()); // 2

// 내부함수에서 외부함수의 변수 num =1에 접근 , 
// 생성된 이후에 계속 기억하고 있음
