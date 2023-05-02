### this

- this란 무엇인가? this바인딩은 무엇인가?
    
    this란, 자신이 속한 객체, 인스턴스를 가리키는 자기참조 변수이다.
    
    this바인딩이란? 
    this와 this가 가리키는 객체를 연결하는 것을 뜻하는데 자바스크립트의 this는 함수가 호출되는 시점에 this가 가리키는 값이 결정된다. 
    
- this바인딩에 영향을 미치는 함수 호출방법을 간단하게 설명
    - 일반함수로 호출
    - 메서드 호출
    - 생성자함수 호출
    - bind, call, apply 간접호출
    
    ---
    
    - 일반함수로 호출하되, 전역객체가 아닌 해당 객체를 바인딩하게 하는 방법?
        - 전역객체에 바인딩된다
        - 프로토타입의 bind( ) 함수를 활용한다, 화살표함수를 사용해 상위스코프를 바인딩하게 한다
        
    - 메서드를 호출하여 this를 바인할 때의 주의점
        - 메서드를 생성한 객체에 바인딩 되는 것이 아니라, 메서드를 호출한 객체에 바인딩이 된다. 메서드는 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체이기 때문에 메서드를 호출한 객체와 연결되어 실행한다.
            
            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03f3b9d4-5bdb-4c8e-b49e-f31395a02fe3/Untitled.png)
            
        
    - 생성자함수로 호출한 this바인딩
        - 생성자함수가 생성할 인스턴스에 바인딩된다.
        
    - Function.prototype.apply / call / bind
        - **apply, call** 
        apply와 call은 함수 호출이 목적이다. 이 메서드는 첫번째 인수로 전달한 객체를 호출한 함수의 this로 바인딩한다.
            
            ```jsx
            function getThisBinding() { return this; }
            
            // this로 사용할 객체
            const thisArg = { a: 1 };
            
            console.log(getThisBinding()); // window
            console.log(getThisBinding.apply(thisArg)); // {a: 1}
            console.log(getThisBinding.call(thisArg)); // {a: 1}
            ```
            
        - **bind** 
        bind메서드는 특정 this값으로 호출되는 새로운 함수를 반환한다. 메서드의 this와 메서드 내부의 중첩함수의 this가 불일치 하는 문제를 해결한다.
            
            ```jsx
            const person = {
              name: 'Lee',
              foo(callback) {
                setTimeout(callback.bind(this), 100);
              }
            };
            
            person.foo(function () {
              console.log(`Hi! my name is ${this.name}.`); // Hi! my name is Lee.
            });
            ```