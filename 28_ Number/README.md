## Number객체

- Number객체는 생성자 함수다. new연산자와 함께 Number인스턴스(객체)를 생성할 수 있다.
- new연산자를 사용하지 않고 Number생성자 함수를 호출하면, 일반 함수를 호출하는 것과 같다.  이를 이용하여 명시적으로 타입을 변환하기도 한다.
    
    ```jsx
    // 문자열타입 -> 숫자타입
    Number('0')// 0
    Number('-1')// -1
    Number('10.23')// 10.23
    
    // 불리언타입 -> 숫자타입
    Number(true)// 1
    Number(false)// 0
    ```
    

## Number메서드

### (1) **Number.isNaN**
- 인수로 전달된 숫자값이 NaN인지 검사하여 결과를 불리언으로 반환
- Number.isNaN은 전달받은 인수를 암묵적 타입변환하여 검사하지 않는다. 숫자가 아닌 인수가 주어졌을 때 결과값은 언제나 false이다.
- 전역함수 isNaN은 전달받은 인수를 암묵적 타입변환하여 검사한다.
    
    ```jsx
    // Number.isNaN 인수를 숫자로 암묵적타입변환 X
    Number.isNaN(undefined); // flase
    
    // 전역함수 isNaN은 인수를 숫자로 암묵적타입변환 O
    isNaN(undefined); // true
    ```
    

### (2) Number.isInteger
인수로 전달된 숫자값이 정수인지 검사하여 불리언 값으로 반환한다. 인수를 암묵적 타입 변환을 하지 않아 인수가 숫자가 아닌 경우 false가 반환된다

### (3) **Number.prototype.toString**
숫자를 문자열로 변환하여 반환한다. 인수를 생략하면 기본 10진법이 지정된다.

```jsx
(10).toString();// "10"
(16).toString(2);// "10000", 2진수 문자열 반환
(16).toString(8);// "20"	, 8진수 문자열 반환
```

### (4)Number.prototype.toFixed
숫자를 반올림하여 문자열로 반환한다. 

```jsx
// 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정된다.
(12345.6789).toFixed(); // -> "12346"

// 소수점 이하 1자리수 유효, 나머지 반올림
(12345.6789).toFixed(1); // -> "12345.7"
```
<br>
<br>

### 궁금증
책에서 보면 Number.메서드 이름, Number.prototype.메서드이름이 써 있는 부분이 있다. 같은 메서드인데 prototype 이 쓰여있는 것과 쓰여있지 않은 것의 차이가 무엇일까? 프로토타입을 공부했다고 ㅋㅋ 이런 부분에서 궁금증이 오는 것 같다. 다음 Math객체는 생성자 함수가 아니기에 정적 메서드와 정적 프로퍼티만 제공한다고 해서 더 궁금증이 생겼는지도 모르겠다.

### 정리
결론부터 말하면 Number.메서드이름이 쓰여 있는 것은 정적 메서드이고, Number.prototype.메서드이름은 프로토타입 메서드이다. 

### Number.메서드 = 정적메서드

```jsx
// Number객체 자체에 속하는 메서드이고
// Number.메서드이름( ) 형식으로 호출된다. 
Number.prototype.toFixed()
Number.prototype.toString()

let parsedInt = Number.parseInt("10");
console.log(parsedInt); // 10
```

### Number.prototype.메서드 = 프로토타입 메서드

```jsx
// Number 객체의 프로토타입에 속하는 메서드
// 인스턴스.메서드이름() 형식으로 호출한다. 
Number.prototype.toFixed()
Number.prototype.toString()

let num = 3.14159;
let fixedNum = num.toFixed(2);
console.log(fixedNum); // "3.14"
```
