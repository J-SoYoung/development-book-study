# Promise

ES6에서는 비동기 처리를 위한 패턴으로 프로미스를 도입했다. 프로미스는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있다.

## 비동기 처리를 위한 콜백 패턴의 단점

비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 하더라도 기다리지 않고 즉시 종료된다. 따라서 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프 변수에 할당하면 기대한 대로 동작하지 않는다.

```jsx
let todos;

// GET 요청을 위한 비동기 함수
const get = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // ① 서버의 응답을 상위 스코프의 변수에 할당한다.
      todos = JSON.parse(xhr.response);
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// id가 1인 post를 취득
get("https://jsonplaceholder.typicode.com/posts/1");
console.log(todos); // ② undefined
```

코드를 보아 예상 결과로는 get요쳥 후 결과값을 todos에 할당하고, 할당된 todos를 콘솔에서 확인할 수 있게 된다. 하지만 예상했던 결과가 아닌 콘솔의 값은 undefined이다. 왜일까?

xhr.onload 이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러는 console.log가 종료된 이후에 호출된다. 그렇기 때문에 todos를 출력해보면 아직 onload의 이벤트 핸들러의 결과가 나오지 않았기 때문에 undefined가 출력되는 것이다.

get함수에 등록된 이벤트 핸들러는 get함수의 실행과 동시에 실행되는 것이 아니다. get함수를 실행하고 비동기 함수인 onload이벤트 핸들러는 태스크 큐에 저장되고, 다음 코드로 넘어간다. console.log의 실행이 끝나고 나면 콜스택이 비게 되고, 이벤트 루프에 의해 콜스택으로 푸시되어 실행된다. 따라서, onload이벤트 핸들러에서 서버 응답을 상위 스코프 변수에 할당하면 처리 순서가 보장되지 않는다.

이처럼 비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프 변수에 할당할 수도 없다. 비동기 함수의 결과에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다. 그 방법으로 비동기 처리 결과에 따른 콜백함수를 전달하는 것이 일반적이다.

### (1) 콜백 헬 Callback Hell

비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수의 값을 이용하여 또 다른 처리를 해야 한다면 콜백함수의 호출이 중첩되어 복잡도가 높아지는 현상이 발생한다. 이를 콜백 헬이라고 한다.

### (2) 에러 처리의 한계

```jsx
try {
  setTimeout(() => {
    throw new Error("Error!");
  }, 1000);
} catch (e) {
  // 에러를 캐치하지 못한다
  console.error("캐치한 에러", e);
}
```

setTimeout함수는 비동기 함수이다. setTiemout함수의 실행 시점과, 그 안에 콜백함수의 실행 시점이 다르다.

setTimeout 은 비동기 함수야. setTimeout함수가 실행되면 실행 컨텍스트가 생성돼 콜스택에 setTimeout함수가 푸시되어 실행된다. 그 안에 콜백함수는 바로 실행되지 않고 태스크 큐에 저장돼 있다가 setTimeout함수가 끝나고 콜스택이 비면 이벤트 루프가 콜백함수를 콜스택으로 푸시해주어 콜백함수가 실행된다.

에러는 호출자 방향으로 전파된다. setTimeout의 콜백함수에 에러코드는 자신을 호출한 방향으로 에러를 찾게 된다. 하지만 setTimeout은 이미 실행이 끝나버린 상황이므로 에러를 캐치하지 못하게 되는 것이다.

## 이의 해결방법으로는 콜백함수 안에 try-catch문을 작성하여 콜백함수에 대한 에러문을 작성해주면 된다. 위처럼 간단한 비동기코드는 문제가 없어 보이지만 콜백이 중첩되는 상황에서의 해당 콜백마다 에러 처리를 해주어야 하기 때문에 비동기 처리를 위한 콜백함수의 에러 처리는 굉장히 까다롭다고 볼 수 있을 것 같다.

## 프로미스의 생성

## promise란? 비동기 처리 상태와 처리 결과를 관리하는 객체

- 프로미스는 비동기 함수 연산이 완료된 이후에 resolve, reject 함수를 실행하여, 비동기 후처리를 할 수 있습니다.
- 프로미스를 사용하여 비동기 작업을 동기적으로 처리한 것처럼 값을 반환할 수 있습니다.
- `Promise`는 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태정보를 가집니다.

```jsx
대기(*pending)*: 초기 상태.
이행(*fulfilled)*: 연산 성공.
거부(*rejected)*: 연산 실패.
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88d5f96c-80ad-41c5-8051-803770482da6/Untitled.png)

## 프로미스의 생성

- Promise생성자 함수를 new연산자와 함께 호출하면 프로미스 객체를 생성한다.
- Promise생성자 함수는 비동기 처리를 수행할 콜백함수(resolve, reject)를 인수로 전달받는다
- code
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e42da95c-b129-4f53-8c42-5598c631ecd2/Untitled.png)
  ```jsx
  import React, { useEffect, useState } from "react";

  export const MyProfile = () => {
    const [result, setResult] = useState("");
    console.log(result);

    const promiseGet = (url) => {
      return new Promise((resolve, reject) => {
        // 서버와 통신하는 객체
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.onload = () => {
          if (xhr.status === 200) {
            // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
            resolve(JSON.parse(xhr.response));
          } else {
            // 에러 처리를 위해 reject 함수를 호출한다.
            reject(new Error(xhr.status));
          }
        };
      });
    };

    const handleClick = () => {
      promiseGet("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          setResult(res);
        })
        .catch((err) => console.error(err))
        .finally(() => console.log("Bye!"));
    };

    return (
      <>
        <div>MyProfile</div>
        <button onClick={handleClick}>버튼클릭</button>
      </>
    );
  };
  ```

## 프로미스의 후속 처리 메서드

프로미스의 비동기 처리상태가 변화하면 then(), catch(), finally()를 사용해 결과를 처리할 수 있다. then은 작업이 성공적으로 이행된 경우를 처리, catch는 작업이 실패현 경우를 처리한다.

### (1) then

then메서드는 두 개의 콜백함수를 인수로 전달받는다.

- 첫 번째 콜백함수 : fullfilled상태일 때 호출되며 비동기 처리 결과를 인수로 전달받는다
- 두 번째 콜백함수 : rejected상태일 때 호출되며 프로미스의 에러를 인수로 전달받는다.

### (2) catch

한 개의 콜백함수만 전달받고, 프로미스가 rejected 상태인 경우만 호출된다.

### (3) finally

한 개의 콜백함수를 인수를 전달받는데, finally메서드의 콜백함수는 프로미스의 성공/실패와 상관없이 무조건 한 번 호출된다. 프로미스 상태와 상관 없이 공통적으로 수행해야 할 내용이 있을 때 유용하게 사용된다.

## 프로미스의 에러 처리

프로미스의 에러처리는 then 메서드의 두번째 콜백함수로 처리할 수도 있고 catch메서드를 사용하는 방법도 있다. 하지만 then메서드의 두번째 콜백함수는 첫 번재 콜백함수에서 발생한 에러를 캐치하지 못하는 경우도 생기고, 가독성이 좋지 못하다.

그렇기 대문에 catch 메서드를 사용해 에러 처리를 하는 것이 좋다. catch메서드는 비동기 처리에서 발생한 에러뿐만 아니라 then 메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다.

## 프로미스 정적 메서드

- Promise.resolve / Promise.reject
  이미 존재하는 값을 래핑하며 프로미스를 생성하기 위해 사용한다
- Promise.all
  여러 개의 비동기 처리를 모두 병렬로 처리할 때 사용한다. 서로 의존하지 않는 비동기 처리를 동기 처리를 할 필요가 없는 경우에 사용 할 수 있다. 모든 promise 상태가 fulfilled상태가 되기를 기다렸다가 결과를 반환한다
  ```jsx
  const requestData1 = () =>
    new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  const requestData2 = () =>
    new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const requestData3 = () =>
    new Promise((resolve) => setTimeout(() => resolve(3), 1000));

  Promise.all([requestData1(), requestData2(), requestData3()])
    .then(console.log) // [ 1, 2, 3 ] ⇒ 약 3초 소요
    .catch(console.error);
  ```
- Promise.race
  여러개의 promise에서 가장 먼저 fulfilled 상태가 된 프로미스 처리 결과를 resolve하는 새로운 프로미스를 반환한다.
- Promise.allSettled
  프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 전달받은 프로미스가 비동기 처리가 된 상태면 처리 결과를 배열로 반환한다. promise.allSettled가 반환한 배열에는 fulfilled나 rejected상태와는 상관없이 인수로 전달받은 프로미스의 처리 결과가 담겨있다.

## 마이크로 태스크 큐

마이크로 태스크 큐는 태스크 큐와는 별도의 큐다.

마이크로 태스크 큐는 프로미스의 후속 처리 메서드의 콜백함수가 저장되는 곳이며, 태스크 큐보다 우선순위가 높다. 이벤트 루프는 콜 스택이 비면 먼저 마이크로태스크 큐에서 대기하고 있는 함수를 가져와 실행한다. 이후 태스크 큐에 있는 함수를 가져와 실행한다.

```jsx
setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
```

위 코드의 실행 순서는 2→3→1이다. 그 이유는 프로미스의 후속 처리 메서드는 마이크로 태스크 큐에 저장되어 태스크 큐에 저장된 setTimeout의 콜백함수보다 우선순위가 높기 때문에 먼저 실행됨.

## fetch

HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 Web API이다. fetch함수는 HTTP응답을 나타내는 response객체를 래핑한 promise객체를 반환한다.

```jsx
cosnt promise = fetch(url, [oprion])

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
	.then( json => console.log(json));
```

- HTTP응답을 나타내는 response객체를 래핑한 프로미스를 반환하므로 후속처리 메서드 then을 통해 resolve한 객체를 전달받을 수 있다. Response객체에 포함돼 있는 HTTP응답 객체를 받기 위해 Response.prototype.json메서드를 사용해 역직렬화하여 문자열로 변환해 사용한다.
- fetch함수는 404-not found / 500-internet server error 와 같은 HTTP에러에 reject하지 않고 response의 ok상태를 확인하여 false인 결과를 respon
