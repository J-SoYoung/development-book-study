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

- ### 클래스는 프로토타입 기반의 객체 생성방식이다.
클래스는 생성자 함수이며 new연산자로 호출하면 인스턴스를 생성한다. 

```jsx
class Person{ 
constructor (name) {
    this.name = name;
    }
}
console.dir(Person)
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1dc37c5-b38e-4388-864f-229991d28a0d/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1d985356-e579-4bfd-9786-03b6fc1f45e7/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7e41ae4-0b1d-4225-8be3-4a131a67bf7d/Untitled.png)

Person은 클래스로 정의되었고, 클래스는 함수이다. 
length, prototype, arguments, caller 등의 함수객체의 프로퍼티로 구성돼 있고, 프로토타입과 연결되어 자신만의 스코프체인을 구성한다.

- *(269-270p) prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다. 그 중에 prototype의 constructor 프로퍼티는 자신을 참조하고 있는 생성자 함수를 가리킨다.*
- *prototype의 constructor와 class의 constructor는 다르다. 지금 설명하고 있는 constructor는 prototype의 constructor로 모든 프로토타입이 가지고 있는 프로퍼티이며, 생성자 함수를 가리킨다.*

class Person의 prototype의 constructor프로퍼티는 class Person을 가리키고 있다. 이는 class Person이( 클래스 ) 인스턴스를 생성하는 생성자 함수라는 것을 의미한다. 

---

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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f5ba171-32c6-44fe-afa8-61dc17324005/Untitled.png)

**(3) 정적 메서드**

- 클래스에 직접 메서드를 추가하는 방식으로, 인스턴스를 생성하지 않아도 호출할 수 있다.
- 인스턴스의 프로토타입 체인상에 존재하지 않으므로, 클래스의 메서드를 상속받을 수 없고, 인스턴스의 상태나 속성에 접근할 수 없다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/950f54d1-230f-444e-b145-7752ee3a6439/Untitled.png)