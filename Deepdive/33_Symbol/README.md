### Symbol은 무엇?

ES6에 추가된 데이터 타입으로 변경 불가능한 원시 타입의 값이다. 심벌값은 다른 값과 중복되지 않는 유일무이한 값이다. 

Symbol은 함수를 호출하여 심벌값을 생성한다. 

```jsx
const mySymbol = Symbol()
console.log(mySymbol) // Symbol()
```

### Symbol을 사용하는 이유?

심벌은 중복의 위험이 없은 유일한 프로퍼티 키를 생성하거나 상수를 만들기 위해 사용할 수 있다. 기존에 작성된 코드에 영향을 주지 않으면서 새로운 프로퍼티를 추가하기 위해 도입된 데이터 타입이다. 

- 유일한 프로퍼티 키 생성
    
    ```jsx
    // 심벌 값으로 프로퍼티 키를 생성
    const obj = { [Symbol.for('mySymbol')]: 1 };
    
    obj[Symbol.for('mySymbol')]; //  1
    ```
    
- 은닉된 속성 생성 : 심벌값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for…in문 등과 같은 메서드로 찾을 수 없다.
    
    ```jsx
    // 심벌 값으로 프로퍼티 키를 생성
    const obj = { [Symbol.for('mySymbol')]: 1 };
    
    for (const key in obj) {
      console.log(key); // 아무것도 출력되지 않는다.
    }
    
    console.log(Object.keys(obj)); // []
    console.log(Object.getOwnPropertyNames(obj)); // []
    
    // 하지만 getOwnPropertySymbols 메서드로는 심벌 프로퍼티 키를 찾을 수 있다
    console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(mySymbol)]
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a34446b-722a-433b-a9ab-61016daf79e9/Untitled.png)
    
- 상수값 정의 : Symbol은 유일한 값을 보장하므로, 상수 값으로 사용하기에 적합하다.
    
    ```jsx
    const RED = Symbol('red');
    const BLUE = Symbol('blue');
    
    const color = RED;
    if (color === RED) {
      console.log('The color is red.');
    }
    ```
    
- 표준 빌트인 객체에 사용자 정의 메서드를 추가해야 되는 경우, 심벌값으로 프로퍼티 키를 생성하여 확장하면 중복의 위험이 없다.

---

### Q . 매번 Symbol을 사용하는 게 좋을까? NO

- symbol은 항상 새로운 값을 반환하므로 불필요하게 많은 Symbol을 생성할 경우 메모리 누수가 발생할 수 있다. 그러므로 필요한 경우에만 사용하는 것이 좋다. 일반적인 상수값이나 프로퍼티 키를 생성할 경우에는 문자열을 사용하는 것이 적절하다.
- Symbol은 유일한 값을 가지기 때문에 같은 Symbol값을 비교하더라도 항상 false가 반환된다. 이는 예상과는 다른 동작을 일으킬 수 있다.

### A. 아니다. 객체의 속성을 은닉하거나 고유 프로퍼티 키가 필요한 경우에만 사용하는 것이 바람직하다