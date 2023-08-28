var x = 'global x';
var y = 'global y';

function outer(){
  var z = "outer local z"

  console.log(x, 1)
  console.log(y, 2)
  console.log(x, 3)

  function inner(){
    var x = 'inner local x'

    console.log(x, 4)
    console.log(y, 5)
    console.log(z, 6)
  }
  inner()
}
outer()

console.log(x, 7)
console.log(z, 8) // Error 참조에러 전역변수가 아니라 지역변수인데 전역에서 호출함

// 실행순서
// outer함수실행 1-2-3- 내려와서 inner실행 - 4- 5- 6- 7- 8

// 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 (참조 = 갖다쓴다)
// 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수는 없다.  