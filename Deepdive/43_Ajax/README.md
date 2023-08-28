# **Ajax**

비동기 방식으로 서버에 데이터를 요청하고, 응답받은 데이터로 웹페이지를 렌더링하는 프로그래밍 

Web API인 **XMLHttpRequest 객체를 기반으로 동작**

- XMLHttpRequest  :  HTTP비동기 통신을 윟나 메서드, 프로퍼티 제공, 서버 작동시 새로고침을 하지 않아도 페이지의 일부 업데이트가 가능하다

### 전통적인 웹페이지 렌더링 방식

- 완전한 HTML페이지를 서버로부터 전송받아 웹페이지 전체를 렌더링한다. 변경할 필요가 없은 부분까지 렌더링 되기 때문에 불필요한 데이터 통신 발생
- 웹페이지 전체가 렌더링 되기 때문에 화면이 순간적으로 깜작이는 현상이 발생
- 서버와의 통신이 동기적으로 이루어지기 때문에 다음 처리까지 블로킹 된다

### Ajax를 이용한 렌더링 방식

- 변경에 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다
- 한정적으로 렌더링이 가능하기 때문에 빠른 퍼포먼스와 부드러운 화면전환이 가능하다
- 서버와의 통신이 비동기 방식으로 이루어지기 때문에 블로킹이 발생하지 않는다

## XML과 JSON

데이터를 표현하는 형식이다. 
JSON은 자바스크립트 객체 표기법으로 데이터를 Key-value의 쌍으로 표현한다. 
XML은 태그로 이루어진 마크업 언어로, 데이터를 계층적으로 표현한다.

## JSON

- 클라이언트와 서버간의 HTTP통신을 위한 텍스트 데이터 포맷이다
- 언어 독립형 데이터 포맷 ⇒ 대부분의 프로그래밍 언어에서 사용 가능하다.
- 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트다.
- **JSON의 키는 반드시 큰따옴표로 묶어줘야 한다. ?????? (있다가 test해보기)**

### JSON.stringify

- 객체를 JSON포맷의 문자열로 변환 / 배열도 JSON포맷의 문자열로 변환
    
    ```jsx
    const obj = {
      name : 'jung',
      age : 20,
      alive : true,
      hobby : ['tralveling', 'tennis'] 
    };
    
    // 객체를 JSON포맷의 문자열로 변환 = 직렬화
    const json = JSON.stringify(obj);
    // console.log(typeof json, json)
    
    // 문자열 변화 + 들여쓰기를 한다
    const prettyJson = JSON.stringify(obj, null, 2);
    ```
    
    ```jsx
    const todos = [
      { id: 1, content: 'HTML', complated: false},
      { id: 2, content: 'CSS', complated: true},
      { id: 3, content: 'JavaScript', complated: false},
    ];
    
    const todosJson = JSON.stringify(todos, null, 2)
    // console.log(typeof todosJson, todosJson)
    ```
    

### JSON.parse

- JSON포맷의 문자열을 객체로 변환
    
    ```jsx
    const obj2 = {
      name : 'soyoung',
      age : 20,
      alive : false,
      hobby : ['coding', 'running'] 
    };
    
    // 객체 -> JSON문자열로
    const obj2Json = JSON.stringify(obj);
    // JSON문자열 -> 객체
    const obj2Parse = JSON.parse(obj2Json);
    ```
    

## XML

- 태그기반 형식이기 대문에 가독성이 톺고 계층적 구조를 파악하기 쉽다.
- JSON보다 더 큰 파일 크기를 가지고, 태그를 정의할 수 있는 확장성이 있어 복잡한 데이터 구조를 나타내기 적합하다.
- 자바스트립트를 사용하여 HTTP요청을 전송하려면 XMLHttpRequest객체를 사용해야 한다.

### XMLHttpRequest객체 생성

```jsx
const xhr = new XMLHttpRequest();
```