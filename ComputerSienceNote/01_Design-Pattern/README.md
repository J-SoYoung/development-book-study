# 1-1 Design pattern

## singleton pattern

자신의 인스턴스를 하나 포함하고 그 인스턴스만 반환합니다. 클라이언트는 새 인스턴스를 만들거나 싱글톤에서 제안한 인스턴스 외에 다른 인스턴스를 가져올 수 없다.<br>

- 싱글톤 패턴의 장점은 인스턴스를 매번 생성하지 않아서 메모리 소비가 적다는 점이다.
- 단점으로는 하나의 인스턴스를 공유하기 때문에 의존성이 높다. 그리고 하나의 인스턴스를 공유하는 모듈간의 실행 순서에 따라 결과가 바뀔 수 있다는 점도 문제가 될 수 있다.
- ex1 코드 예제 출처 : https://medium.com/@tomas.svojanovsky11/javascript-singleton-pattern-1ef4e77ce696
- ex2 코드 예제 출처 : https://deeprnd.medium.com/javascript-singleton-design-pattern-2e5cc09e45b9

## factory pattern

기본 틀을 갖춘 객체를 생성한 후, 기본 객체를 확장하여 다른 객체를 생성하는 패턴이다. 이때 생성한 상위 객체는 중요한 뼈대를 결정하고, 하위 객체는 구체적인 내용을 결정하게 된다.

- 상위 객체와 하위 객체 사이에 느슨한 결합성을 가지며, 이로 인해 객체 사이에 유연성이 있다는 것이 큰 장점이다.
- ex1 코드 예제 idea : https://medium.com/gitconnected/javascript-design-patterns-factory-pattern-dc75cf7fd989

## strategy pattern

전략 패턴은 런타임 시 알고리즘을 선택할 수 있게 만드는 패턴이다. 객체의 내용을 바꾸고 싶은 경우에 만들어놓은 캡슐화 된 알고리즘을 교체하면서 구현이 가능하다.

- ex1 코드 예제 : https://medium.com/volosoft/strategy-pattern-implementation-with-typescript-and-angular-9ad8b1929e9c

## observer pattern

주체와 옵저버 사이의 관계를 통해 어떤 객체의 상태 변화를 감지하고 처리하는 패턴이다.

- ex1 코드 예제 : https://medium.com/gitconnected/javascript-design-patterns-factory-pattern-dc75cf7fd989

## proxy pattern

프록시는 대상 객체를 대신하는 것을 의미한다. 직접 객체에 접근하여 작업을 하는 것 대신 프록시와 작업을 하게 되는 것이다.

- new Proxy로 객체를 생성하여, 대상 객체에 대한 상호작용을 가로채고 제어할 수 있다.
- ex1,2 예제코드 : https://medium.com/@anisurrahmanbup/javascript-proxy-pattern-proxy-reflect-e9f006017b3d

```jsx
const personProxy = new Proxy(person, {});
```

## Iterator pattern

iterator를 사용하여 순회할 수 있는 여러 자료구조에서 일관된 방식으로 컬렉션의 요소에 접근할 수 있게 하는 디자인 패턴을 말한다.

```jsx
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item); // 1  2  3
}
// item of arr 가 iterator pattern이 될 수 있다.
```

- ex1 예제코드 : https://medium.com/@flowergeoji/javascript-es6-basic-952ba3ff732

## revealing module pattern

- 함수 외부에서 참조할 수 있는 데이터와, 접근할 수 없는 데이터를 구분해 생성할 수 있게 하는 디자인 패턴이다.
- 즉시 실행 함수와 객체 생성자 함수를 통해 구현 가능하며, 모듈에서 은닉하고 싶은 정보가 있을 때 사용할 수 있다.

- ex1 예제코드 : https://obarguti.medium.com/javascript-revealing-module-pattern-4b8026ae3b9d
- ex2 예제코드 : 면접을 위한 CS 전공 지식 노트 (revealing-module-pattern)

## MVC, MVP, MVVM pattern

- MVC<br>
  model-view-controller
- MVP<br>
  model-view-presenter
- MVVM<br>
  model-view-view model

# 1-2 programming paradigm

프로그래머에게 프로그래밍의 관점을 갖게 하고, 코드를 어떻게 작성할지 결정하는 역할을 한다.

## 명령형 프로그래밍

(1) 명령형 프로그래밍<br>
코드의 실행 단계를 설명하는 방법으로, 어떻게 할 것인가를 표현하게 된다. 명령형은 컴퓨터에 프로그램의 단계적 지침을 제공하고, 개발자는 쉽게 내용을 추론할 수 있다.<br>

- 객체지향적 프로그래밍<br>
  - 하나의 기능에 관한 변수나 함수를 객체로 묶어서 객체로 나타낸다.
  - 캡슐화, 관련 함수와 변수를 그룹화하여 메서드와 프로퍼티를 숨기거나 노출하는 것
  - 추상화, 공통된 기능을 정의하는 것
  - 다형성, 동일한 기능에 대해 다른 방식으로 객체를 나타낼 수 있는 것
  - 상속, 객체가 다른 객체의 속성과 메서드를 상속받아 사용할 수 있는 것.
- 절차형 프로그래밍<br>

## 선언형 프로그래밍

(1) 선언형 프로그래밍<br>
프로그램의 제어 흐름을 설명하는 것이 아니라, 프로그램이 달성하기를 원하는 결과를 정의한다. 무엇을 나타낼지를 설명한다.

```jsx
// longPasswords는 passwords에서 9자 이상의 password만 배열로 반환한 목록이다
const longPasswords = passwords.filter((password) => password.length >= 9);
```

(2) 함수형 프로그래밍<br>
순수 함수를 조합하여 프로그래밍을 한다. 함수의 인자로 들어온 매개변수만 함수의 결과값을 바꿀 수 있고, 전역변수가 함수 내부에 영향을 준다면 그것은 함수형 프로그래밍이 아니다.

- 순수함수를 사용
- 불변성을 유지하는 것
