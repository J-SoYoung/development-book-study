Math는 수학적인 상수,함수를 위한 프로퍼티와 메서드를 제공한다. Math는 생성자 함수가 아니기 때문에 정적 프로퍼티와 정적 메서드만 제공한다.

## Math메서드

### Mtah.abs

인수로 전달된 숫자의 절대값을 반환한다.

```jsx
Math.abs(-223)
// 223
```

### Math.round, ceil, floor

round : 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환
ceil : 소수점 이하를 올림한 정수를 반환
floor : 소수점 이하를 내림한 정수를 반환

```jsx
// round 반올림
Math.round(1.4)// 1 
Math.round(1.7)// 2
Math.round(-1.4)// -1
Math.round(-1.7)// -2

// ceil 올림
Math.ceil(1.4)// 2
Math.ceil(-1.4)// -1

// floor 내림
Math.floor(1.4)// 1
Math.floor(-1.4)// -2
```

### Math.sqrt

인수로 전달된 숫자의 제곱근을 반환한다

```jsx
Math.sqrt(9);  // -> 3
Math.sqrt(2);  // -> 1.414213562373095
```

### Math.pow

첫 번째 인수를 밑으로, 두 번째 인수를 지수로 거듭제곱한 결과를 반환한다. ES7에서 도입된 지수 연산자를 사용하면 가독성이 더 좋다

```jsx
Math.pow(2, 8);  // -> 256

// ES7 지수 연산자
2 ** 2 ** 2; // -> 16
Math.pow(Math.pow(2, 2), 2); // -> 16
```

### Math.random

임의의 난수(랜덤숫자)를 반환한다. 난수는 0에서 1미만의 실수다. 그러므로 0은 포함되지만 1은 포함되지 않는다. 

1에서 10까지의 랜덤 정수를 출력하기 위해서는

```jsx
Math.random()
// 0.21849166785483143

Math.random()*10
// 2.1849166785483143

(Math.random()*10)+1
// Math.random가 출력하는 난수는 0과 1미만의 정수이기 때문에
// 1-10이 되기 위해서는 +1을 해줘야한다.
// 3.1849166785483143

Math.floor((Math.random()*10)+1)
// 뒤의 소수점을 버린다 
```

### Math.max, Math.min

전달받은 인수 중에서 가장 큰 수(max)와 작은수(min)를 반환

```jsx
Math.max(1,2,3)// 3
Math.min(1,2,3)// 1
```

Math.max, min은 배열을 직접적인 인수로 받지 못하고, 숫자 인수를 개별적으로 받아들여 동작한다. 그렇기 때문에 스프레드 문법이나 apply메서드를 사용해 배열의 내용을 풀어 숫자 요소로 인수를 전달해야 한다.  

```jsx
// max, min메서드는 배열을 직접적인 인수로 받아들이지 못함. 
Math.max([1,2,3,4])// NaN

// 스프레드 문법 
Math.max(...[1,2,3,4])// 4

// apply()메서드 사용
Maht.max.apply(null,[1,2,3,4])// 4
```