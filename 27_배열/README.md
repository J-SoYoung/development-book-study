# **배열이란**
📕notion: https://www.notion.so/fun-blog/27-Array-ef79933d8c074a4fa79fa0ed34ec3062<br>
<br>

배열은 여러 개의 값을 순차적으로 나열한 자료구조다. 
- 배열이 가지고 있는 값을 요소라고 한다. 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.
- 배열의 요소는 자신의 위치를 나타내는 정수인 인덱스를 가지고 있다. 인덱스는 배열의 요소에 접근할 때 사용하고, 배열의 길이를 나타내는 length프로퍼티를 갖는다.
- 배열은 인덱스와 length프로퍼티를 갖기 때문에 for문을 통해 순차적으로 요소에 접근할 수 있다.
- 배열은 객체 타입이다.

### Array생성방법
- 배열 리터럴
- Array생성자함수
- Array.of
- Array.from

### 배열 요소의 참조
- 배열의 요소를 참조할 때에는 대괄호( [ ] ) 표기법을 사용, 대괄호 안에는 인덱스가 와야 한다.
- 존재하지 않는 요소에 접근하면 undefined가 반환된다
```jsx
const arr = [1, 2];

console.log(arr[0]);// 1 , 인덱스가 0인 요소를 참조
console.log(arr[1]);// 2 , 인덱스가 1인 요소를 참조
console.log(arr[2]);// undefined
```

### 배열 요소의 추가와 갱신
- 배열에도 요소를 동적으로 추가할 수 있다. 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가되고, length프로퍼티는 자동으로 갱신된다
- 이미 존재하는 요소에 값을 재할당하면 값이 갱신된다

```jsx
const arr = [1, 2];
arr[2] = 4;

console.log(arr);// [1, 2, 4], 요소추가
console.log(arr.length)// 3, length 자동 갱신

// 이미 존재하는 요소에 값을 재할당하면, 값이 갱신된다
arr[0] = 8;
console.log(arr);//[8, 2, 4]
```

### 배열 삭제
- 배열의 특정 요소를 삭제하기 위해 delete연산자를 사용할 수 있다. 하지만 delete연산자는 객체의 프로퍼티를 삭제하고, length에는 변화가 없다. 해당 배열은 희소배열이 되므로 delete연산자는 사용하지 않는 것이 좋다. 

- 대신 Array.prototype.splice메서드로 배열의 특정 요소를 삭제하는 방법을 사용한다.

### 배열 메서드

배열 메서드는 결과물을 반환하는 패턴이 두가지이다. **원본 배열을 직접 변경하는 메서드**와 원본 배열을 변경하지 않고 **새로운 배열을 생성해** 반환하는 메서드가 있다.
- **배열 추가기능**
    ```jsx
    Array.prototype.push// 배열 마지막 요소에 추가, 원본배열 수정, 스택,큐-자료구조 가능
    Array.prototype.unshift// 배열 맨 앞 요소에 추가, 원본배열 수정,
    Array.prototype.concat// 배열 마지막 요소에 추가, 원본배열 수정X, 새로운 배열 반환
    Array.prototype.splice// 원본 배열의 중간에 요소를 추가/제거하는 경우, 원본배열 수정
    ```

- **배열 삭제기능**
```jsx
Array.prototype.pop// 배열의 마지막 요소를 삭제, 원본배열 수정, 스택구조(후입선출)
Array.prototype.shift// 배열의 맨 앞 요소를 삭제, 원본배열 수정, 큐(선입선출)
```

- **배열 인덱스 반환, 찾기기능**
    
```jsx
Array.prototype.indexOf// 인수 검색-> 인덱스 반환
Array.prototype.includes// 특정 요소 찾아 T/F반환
```

- **기타**
```jsx
Array.isArray// 배열인지 아닌지 T/F반환
Array.prototype.slice// 인수로 전달된 범위의 배열을 만듦
Array.prototype.join// 원본 배열의 요소를 문자열로 변환
Array.prototype.reverse// 원본 배열 순서 뒤집기
Array.prototype.fill// 배열을 하나의 값으로 모두 바꾸기
Array.prototype.flat// 중첩배열을 평탄화 
```

### 배열 고차 함수
고차함수는 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다. 고차함수는 외부상태의 변경을 피하고 불변성을 유지하는 함수형 프로그래밍에 기반을 두고 있다. 

### Array.prototype.sort
- sort 메서드는 배열의 요소를 오름차순으로 정렬한다. 한글도 오름차순 정렬
- 원본 매열을 직접 변경하며 정렬된 배열을 반환한다

```jsx
const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
// 원본 배열을 직접 변경한다
console.log(fruits); // [ 'apple','banana','orange' ]
```
### **sort 메서드의 정렬 순서는 유니코드의 순서를 따르기 때문에,**

- 배열이 숫자 타입의 요소여도 일시적으로 문자열로 변경 후에 유니코드 값을 기준으로 정렬된다.<br>
    이러한 sort 함수의 특징 때문에 우리는 sort 함수에 대한 커스터마이징을 해주어야 한다. => sort메서드에 비교함수를 인수로 전달해야 한다.

```jsx
const point = [40, 100, 1, 5, 2, 25, 10];
// 우리가 생각하는 정렬 결과 [ 1, 2, 5, 10, 25, 40, 100 ]
point.sort();
// 유니코드 기준으로 정렬된 결과값
console.log(point); // [1, 10, 100, 2, 25, 40, 5]
```

### 비교 함수(Compare Function) 작성하기
- sort메서드에 인수로 넣을 비교함수의 결과값에 따라 오름차순과 내림차순이 결정된다.
- 비교함수는 1 , 0, -1의 값을 반환해야 한다.
```
// 비교함수의 반환값이 0보다 작으면 a를 우선 정렬한다.
    ( a, b ) => a - b 
// 비교함수의 반환값이 0보다 크면 b를 우선 정렬한다.
    ( a, b ) => b - a

const point = [40, 100, 1, 5, 2, 25, 10];

// 유니코드 기준으로 정렬된 결과값
point.sort(); // [1, 10, 100, 2, 25, 40, 5] // 오름차순 정렬
point.sort((a,b)=> a-b) // [1, 2, 5, 10, 25, 40, 100] 
point.sort((a,b)=> b-a) // [100, 40, 25, 10, 5, 2, 1] // 내림차순 정렬
```
### Array.prototype.forEach

- for문을 대체할 수 있는 고차함수이다 = 반복문을 추상화 한 고차함수다.
- 배열의 요소값, 인덱스, forEach를 호출한 배열 자체(this)를 전달받을 수 있다.

```jsx
// forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소: ${item}, idx: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/
```
- forEach메서드의 콜백함수는 일반함수로 호출되기 때문에 내부 this는 undefined를 가리킨다. forEach메서드의 두번째 인수로 forEach메서드의 콜백함수 내부에서 this로 사용할 객체를 전달하여 사용한다
- 또는 화살표 함수를 사용하여 상위 스코프의 this를 참조할 수 있도록 하는 것이 더 나은 방법이다.
- forEach문은 for문을 추상화 한 고차함수이지만 for문 처럼 break, continue문을 사용할 수 없고, 배열의 모든 요소를 순회해야 끝이 난다. 결과적으로 forEach메서드는 for문에 비해 성능이 좋지는 않지만 가독성은 좋기 때문에 요소가 많은 배열을 순회할 때를 제외하고는 forEach 사용을 권장한다.

### Array.prototype.map
map함수는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출한다.<br> 
그리고 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다. <br>
forEach메서드는 단순히 반복문을 대체하기 위한 고차함수이고, map메서드는 콜백함수의 반환값을 새로운 배열로 반환한다. 
- map함수는 콜백함수(callbackFunction)와 thisArg의 두 개의 매개변수가 있고 콜백함수는 cur, index, arr 3개의 매개변수를 갖는다.
    
    ```jsx
    array.map(callbackFunction ( cur, idx, arr ), thisArg)
    ```
    - cur : 배열 내 현재 값
    - idx : 배열 내 현재 인덱스
    - arr : 현재 배열
    - thisArg : 콜백함수 내에서 this로 사용될 값
    
    ```jsx
    const number = [2,4,6,8,10]
    
    const double = number.map(( item, index, arr )=> {
        console.log(item, index, arr)
        return item*2
    })
    
    // 결과값 ( item, index, arr )
    // 2 0 (5) [2, 4, 6, 8, 10]
    // 4 1 (5) [2, 4, 6, 8, 10]
    // 6 2 (5) [2, 4, 6, 8, 10]
    // 8 3 (5) [2, 4, 6, 8, 10]
    // 10 4 (5) [2, 4, 6, 8, 10]
    
    // number의 요소가 map함수의 결과 값으로 이루어진 새 배열
    console.log(double)// [4, 8, 12, 16, 20]
    ```
    

### Array.prototype.filter

- 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출한다.
- 콜백함수의 반환값이 True인 요소로만 구성된 새로운 배열을 반환한다. 원본 배열은 변경되지 않는다.
- item : 요소값, index : 인덱스, array : filter 메서드를 호출한 배열
    
    ```jsx
    const number = [ 1,2,3,4,5]
    
    const odds = number.filter((item, idx, arr) => {
        console.log( item, idx, arr )
        return item % 2
    })
    
    // 1_자신을 호출한 배열의 모든 요소를 순회, 콜백함수를 반복 호출한다.
    // ( item, idx, arr )
    // 1 0 (5) [1, 2, 3, 4, 5]
    // 2 1 (5) [1, 2, 3, 4, 5]
    // 3 2 (5) [1, 2, 3, 4, 5]
    // 4 3 (5) [1, 2, 3, 4, 5]
    // 5 4 (5) [1, 2, 3, 4, 5]
    
    // 2_콜백함수의 반환값이 True인 새로운 배열을 반환한다
    console.log(odds)// [1, 3, 5]
    
    // 3_원본배열을 바꾸지 않는다
    console.log(number)//(5) [1, 2, 3, 4, 5]
    ```
    

### Array.prototype.reduce

자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출한다.<br>
이때, 콜백함수의 반환값을 다음 순회 시 첫번째 인수로 전달하면서 콜백함수를 호출하고 하나의 결과값을 만들어 반환한다.<br>
= **모든 요소를 누적한 결과를 반환한다.**

- reduce메서드의 네 가지 인수
```jsx
const sum = [1,2,3,4].reduce((accumulator, currentValue, index, array) =>
	accumulator + currentValue, 0)
```
- accumulate : 초기값 또는 콜백함수의 반환값 (누산된 값)
- currentValue : reduce를 호출한 배열의 현재 요소값
- index : 현재 요소의 인덱스
- array : reduce를 호출한 원본 배열
