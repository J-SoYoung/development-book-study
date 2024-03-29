### ES6의 추가기능
ES란 (ECMAScript), Ecma International이 ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어를 말한다. 자바스크립트를 표준화하기 위해 만들어졌다.

ES6는 2015년에 공개된 ECMAscript로 범용 프로그래밍 언어로서 갖춰야 할 기능을 도입하는 큰 변화가 생긴 버전이다. *( deepdive 1장 )*

### 목적에 따라 함수를 구분

ES6 이전의 모든 함수는 일반 함수이자 생성자 함수로 호출할 수 있었다. 메서드나 콜백함수도 프로토타입 객체를 생성하고 프로토타입 프로퍼티를 가질 수 있었다. 
( *위 처럼 모든 함수가 프로토타입 객체를 생성한다면 프로토타입 체인에서 예기치 않은 동작과 문제를 발생시킬 수 있을 것 같음 )*

⇒ 함수를 사용 목적에 따라 세 가지 종류로 명확하게 구분했다. 

- 일반함수 constructor
- 메서드 / 화살표함수 non-constructor

### 메서드에 대한 정의를 규정

- ES6이전에는 메서드에 대한 명확한 정의가 없었으나, ES6에서 메서드는 메서드 축약 표현으로 정의한 함수를 뜻하게 되었다.
    - foo( ) = 메서드
        
        함수의 이름과 함수 내용만으로 구성된 함수 축약표현이다. ES6에선 이를 메서드로 정의하였고, 인스턴스를 생성할 수 없는 non-constructor가 된다. ( = 프로토타입 생성 X )
        
        프로토타입은 생성할 수 없지만, ES6메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯을 갖기 때문에 super키워드를 사용해서 퍼클래스의 메서드를 참조할 수 있다. 
        
    - bar = 함수
        
        ES6 이전 문법을 사용하여 bar변수에 function키워드를 사용하여 함수를 정의하였고, 객체 리터럴 내에서 프로퍼티로 할당하였다.  
        
        ```jsx
        const obj = {
          x: 1,
        
        	// 메서드 
          foo() { return this.x; },
         
        	// 일반 함수
        	bar: function() { return this.x; }
        };
        
        console.log(obj.foo()); // 1
        console.log(obj.bar()); // 1
        ```
        

### 기존 함수선언의 간결한 형식으로 화살표 함수가 등장

---

### REST 파라미터의 등장

### 매개변수에 기본값 지정 가능