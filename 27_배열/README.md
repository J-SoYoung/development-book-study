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