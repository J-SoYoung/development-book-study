### 클래스

- 클래스란 무엇인가? <br>
  자바스크립트에서 객체를 생성하는 방법 중 하나이다
- 객체 생성은 생성자 함수로도 가능한데, 굳이 클래스를 만든 이유는 무엇인가?<br>
  class는 객체 프로그래밍에서 자주 사용하는 개념이다. JAVA, C 언어에 익숙한 개발자들을 위해 자바스크립트에서도 객체를 class로 생성할 수 있도록 하였다. 형태는 class이지만 내부의 모습은 생성자함수의 원리로 만들어진다
- 클래스와 생성자 함수의 차이<br>
  - 클래스
    연산자 없이 호출 불가능, 에러발생 <br>
    extends, super키워드를 통해 상속을 지원한다 <br>
    호이스팅이 발생하지만, 클래스 정의 이전에는 참조할 수 없는 일시적 사각지대가 있다<br>
    class내부에는 strict mode가 암묵적으로 실행<br>
    클래스에서 constructor, 프로토타입메서드, 정적메서드의 프로퍼티 어트리뷰트는 열거 불가능한 값으로 정의된다<br>
  - 생성자함수
    new연산자 없이 호출하면 일반함수를 호출하는 것과 같다 생성자함수<br>
    extends, super키워드를 사용하지 않는다<br>
    함수 선언문과 함수 표현식에 따른 호이스팅이 발생한다<br>
    strict mode가 지정되지 않는다<br>
- 클래스의 특징
  - 클래스는 함수이며 동시에 일급객체가 된다
  - class키워드를 사용해 객체를 생성할 수 있으며 new 연산자와 함께 호출해야 객체를 생성할 수 있다.
  - 클래스 선언문은 런타임 이전에 먼저 평가되어 함수객체를 생성하지만 클래스 정의 이전에 참조할 수 없다. = TDZ일시적 사각지대가 생긴다.
  - 클래스 몸체에서는 constructor생성자, 프로토타입 메서드, 정적 메서드를 정의할 수 있다.
    <br>

### 클래스는 프로토타입 기반의 객체 생성방식이다.

클래스는 생성자 함수이며 new연산자로 호출하면 인스턴스를 생성한다.

```jsx
class Person {
  constructor(name) {
    this.name = name;
  }
}
console.dir(Person);
```

![image](https://github.com/thdud2262/DeepDive_study/assets/85012454/ef52dcdd-3778-4ae1-848a-58df34382001)

Person은 클래스로 정의되었고, 클래스는 함수이다.
length, prototype, arguments, caller 등의 함수객체의 프로퍼티로 구성돼 있고, 프로토타입과 연결되어 자신만의 스코프체인을 구성한다.<br>

- _(269-270p) prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다. 그 중에 prototype의 constructor 프로퍼티는 자신을 참조하고 있는 생성자 함수를 가리킨다._<br>
- _prototype의 constructor와 class의 constructor는 다르다. 지금 설명하고 있는 constructor는 prototype의 constructor로 모든 프로토타입이 가지고 있는 프로퍼티이며, 생성자 함수를 가리킨다._<br>
  class Person의 prototype의 constructor프로퍼티는 class Person을 가리키고 있다. 이는 class Person이( 클래스 ) 인스턴스를 생성하는 생성자 함수라는 것을 의미한다.

### 클래스가 생성하는 메서드

- constructor ( 생성자 , prototype의 constructor와 다르다. )
- 프로토타입 메서드
- 정적 메서드

**(1) 생성자 constructor**

- 인스턴스를 생성하고, 초기화하는 역할을 한다
- constructor에서 this로 생성한 프로퍼티는 class가 생성한 인스턴스의 프로퍼티가 된다
- constructor 생략 가능하고, 생략된 경우 빈 객체를 생성한다. 하지만 인스턴스 값을 초기화 하려면 constructor가 꼭 필요하다.

**(2) 프로토타입 메서드**

- 모든 인스턴스가 프로토타입 체인을 통해 공유하는 메서드를 뜻한다. 클래스 몸체에서 정의한 메서드는 프로토타입 메서드가 된다.
  ![image](https://github.com/thdud2262/DeepDive_study/assets/85012454/3e6216cf-6635-4a58-9345-3ad8cbbc50ed)

**(3) 정적 메서드**

- 클래스에 직접 메서드를 추가하는 방식으로, 인스턴스를 생성하지 않아도 호출할 수 있다.
- 인스턴스의 프로토타입 체인상에 존재하지 않으므로, 클래스의 메서드를 상속받을 수 없고, 인스턴스의 상태나 속성에 접근할 수 없다.
  <br>

### 클래스의 인스턴스 생성과정

- 인스턴스 생성, this바인딩<br>
  constructor 내부를 읽기 전, 빈 객체의 인스턴스가 생성 되고, this는 빈 객체의 인스턴스와 바인딩 된다.
- 인스턴스가 초기화 <br>
  constructor의 코드가 실행되면 this와 바인딩 된 인스턴스의 프로퍼티가 constrcutor의 인수로 전달된 값으로 초기화된다.
- 인스턴스 반환
<br>

### 클래스 프로퍼티
- 인스턴스 프로퍼티 (public)<br>
  constructor내부에 정의하는 프로퍼티다. 언제나 public으로 정의된다
- 접근자 프로퍼티<br>
  값이 없는 프로퍼티로 읽거나 저장할 때만 사용한다. get, set함수가 있으며 프로토타입 프로퍼티에 저장된다.
- 클래스 필드 정의, private 필드 정의, static 필드 정의
    
    ### 클래스 필드 정의
    - 클래스 필드란 ? 클래스가 생성할 인스턴스의 프로퍼티이다.
    - 클래스 몸체에서 클래스 필드*( 프로퍼티-변수 )*를 정의하는 경우 this에 클래스 필드를 바인딩해서는 안된다. this는 constructor와 메서드 내부에서만 유효하다.
    - 클래스 필드*( 프로퍼티-변수 )*를 참조하는 경우 반드시 this를 사용해야 한다.
    - 인스턴스를 생성할 때, 클래스 필드*( 프로퍼티-변수 )*를 초기화 해야 한다면 constructor에서 클래스 필드를 초기화해야 한다.
    - 함수를 클래스 필드*( 프로퍼티-변수 )*에 할당할 수 있다. = 메서드를 정의할 수 있다. 이 경우 프로토타입 메서드가 아닌 인스턴스 메서드가 된다. 그 이유는 클래스 필드는 인스턴스의 프로퍼티이기 때문이다.
        
        ```jsx
        class Person {
          name;
        
          constructor(name) {
            // 클래스 필드 초기화.
            this.name = name;
          }
        }
        
        const me = new Person('Lee');
        console.log(me); // Person {name: "Lee"}
        ```

    
    ### private 필드 정의
    - private필드에는 #을 붙여준다.
    - private필드를 참조할 때도 #을 붙여 참조한다.
    - private필드는 클래스 내부에서만 참조할 수 있다.
        
        ```jsx
        class Person {
          // private 필드 정의
          #name = '';
        
          constructor(name) {
            // private 필드 참조
            this.#name = name;
          }
        }
        
        const me = new Person('Lee');
        
        // private 필드 #name은 클래스 외부에서 참조할 수 없다.
        console.log(me.#name);
        // SyntaxError: Private field '#name' must be declared in an enclosing class
        ```
        
    
    ### static 필드 정의
    - static 키워드를 사용해 static필드를 정의할 수 있다
        
        ```jsx
        class MyMath {
          // static public 필드 정의
          static PI = 22 / 7;
        
          // static private 필드 정의
          static #num = 10;
        
          // static 메서드
          static increment() {
            return ++MyMath.#num;
          }
        }
        
        ```
    
- (      )키워드를 사용해 클래스를 상속받아 확장할 수 있고, (   )키워드를 사용해 부모 클래스의 프로퍼티를 호출할 수 있다. <br>
답 : extends , super<br>

- 두 클래스의 명칭과 관계, extends 키워드와 관련지어 아래 클래스 특징을 설명해주세요.<br>
    ```
    // ( ??? )클래스
    class Base {}
    
    // ( ??? )클래스
    class Derived extends Base {}
    ```
    - 답:  슈퍼,부모,베이스 클래스 // 서브,자식,파생 클래스
        
  - 서브 클래스는 extends 키워드에 의해서 Base클래스와 상속관계에 속한다.
  - 슈퍼클래스와 서브클래스는 인스턴스의 프로토타입 체인을 생성하고 클래스 간 프로토타입 체인을 생성한다. 프로토타입 메서드와 정적 메서드 모두 상속 가능하다
- super를 호출하면 (           ) 할 수 있고, super를 참조하면 (           ) 할 수 있다.
    
    ```
    // 수퍼클래스
    class Base {
      constructor(name) { this.name = name; }
      sayHi() { return `Hi! ${this.name}`;  }
    }
    
    // 서브클래스
    class Derived2 extends Base {
      constructor(a, b, c) { // ②
        super(a, b); // ③
        this.c = c  
    	}
    	sayHi() { return `${super.sayHi()}. how are you doing?`; }
      }
    
    ```
    
    - 답
        
        슈퍼클래스의 constructor를 호출 할 수 있고 / 슈퍼클래스의 메서드를 호출할 수 있다
        
- 상속 클래스의 인스턴스 생성 과정에 대해 간단하게 설명해주세요
    - 서브클래스 super호출
        - 서브클래스를 호출하여 인스턴스를 생성할때, 슈퍼 클래스에서 생성한 인스턴스를 받아서 서브클래스에서 사용하기 때문에 super()를 호출해야만 한다.
        - 서브클래스가 new연산자를 통해 호출되면, 서브클래스의 constructor내부의  super가 수퍼클래스를 호출한다.
    - 수퍼클래스의 인스턴스 생성과 this바인딩
        - 수퍼클래스는 인스턴스가 될 빈 객체를 생성하고, 이에 this를 바인딩 시킨다.
        - 수퍼 클래스에서 인스턴스를 생성하지만, new.target프로퍼티로 생성된 인스턴스의 생성자 함수를 확인해보면 서브클래스를 가리키고 있다.
    - 수퍼클래스의 인스턴스 초기화
        - 빈 객체가 생성되었으면 수퍼클래스의 constructor가 실행되고, this에 바인딩 되어 있는 인스턴스의 프로퍼티를 초기화한다. 
        ( constructor로 전달받은 인수로 초기화함 )
    - 서브클래스 constructor복귀, this바인딩
        - 수퍼 클래스에서 인스턴스의 초기화 과정이 끝났으면 super의 호출이 종료되고, 서브클래스의 constructor로 돌아온다.
        - 이때 super가 반환한 인스턴스가 서브클래스의 this와 바인딩된다. 서브클래스는 별도의 인스턴스를 생성하지 않고, 수퍼클래스에서 생성한 인스턴스를 바인딩하여 사용한다.
    - 서브클래스의 인스턴스 초기화
        - 수퍼클래스에서 생성한 인스턴스와 this바인딩을 끝내고, constructor의 인수로 전달받은 값으로 인스턴스를 초기화시킨다.
    - 인스턴스 반환
        - 인스턴스가 완성되어 반환되고, this도 이에 바인딩된다.
