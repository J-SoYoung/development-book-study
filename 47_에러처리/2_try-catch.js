// 에러처리의 필요성
// 에러처리를 하지 않으면 프로그램은 에러를 내고 강제종료된다.

//1_ 에러발생 프로그램 강제 종료됨
// console.log("start");
// foo();
// console.log("end");

// 2_try-catch-finally문
console.log("start됨");
try {
  foo();
} catch (error) {
  // try 코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행된다
  // try 코드문에서 error객체를 생성하기 때문에 매개변수로 error코드를 확인해볼 수 있다
  console.log("catch문: error객체 출력가능", error);
}
finally{
  // 에러 발생과 상관없이 무조건 실행되는 코드
  console.log('finally문: 에러발생 여부와 상관없이 출력')
}
console.log("end됨. try catch문을 활용하면 프로그램이 강제종료 되지 않는다");
