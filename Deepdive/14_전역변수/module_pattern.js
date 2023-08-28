var myModule = (function () {
  // 모듈 내부에서 사용할 변수나 함수
  var privateVar = "This is a private variable";
  function privateFunc() {
    console.log("This is a private function");
  }

  // 모듈 인터페이스를 정의하는 객체 리터럴
  return {
    // 외부에서 접근 가능한 변수와 함수
    publicVar: "This is a public variable",
    publicFunc: function () {
      console.log("This is a public function");
    },

    // 모듈 내부에서 사용할 변수와 함수를 참조하는 getter 함수
    getPrivateVar: function () {
      return privateVar;
    },
    getPrivateFunc: function () {
      return privateFunc;
    },
  };
})();

// 모듈 인터페이스를 통해 모듈 내부의 변수와 함수에 접근
console.log(myModule.publicVar); // "This is a public variable"
myModule.publicFunc(); // "This is a public function"
console.log(myModule.getPrivateVar()); // "This is a private variable"
var func = myModule.getPrivateFunc();
func(); // "This is a private function"

// 변수 myModule로 익명함수를 정의하고, 함수를 즉시 호출하여 모듈을 생성한다. 
// 모듈 내부에서는 변수 privateVar, 함수 privateFunc를 정의하였고
// 모듈 외부로는 변수 publicVar, 함수 publicFunc을 접근 가능하게 하였다.
// 모듈 내부에만 있는 변수와 함수에 직접 접근할 수 없기 때문에 
// 모듈 외부로 getPrivateVar, getPrivateFunc함수를 만들어 간접 접근하게 하였다
// 이렇게 되면, 모듈 내부 구현을 감추고(은닉) 필요한 부분만 보여줄 수 있다닉할 수 있다. 