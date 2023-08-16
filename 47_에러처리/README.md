### 에러 처리의 필요성

예외적인 상황에 발생하는 에러에 제대로 된 대응을 하지 않으면 프로그램은 강제 종료된다. 에러는 언제나 발생할 수 있기 때문에 다양한 상황에서의 대응을 만들어 두어야 사용자, 개발자가 원인을 파악하여 대응할 수 있다.

### 에러 처리 방법

- 예외적인 상황이 발생하면 null값을 반환하게 두고 옵셔널 체이닝 연산자를 통해 처리하는 방법
- 에러 처리 코드를 등록해두고 에러가 발생하면 에러 처리 코드로 이동하도록 하는 방법

### try… catch… finally 문

```jsx
console.log("[Start]");

try {
  // 실행할 코드(에러가 발생할 가능성이 있는 코드)
  foo();
} catch (err) {
  // try 코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행된다.
  // err에는 try 코드 블록에서 발생한 Error 객체가 전달된다.
  console.error(err); // ReferenceError: foo is not defined
} finally {
  // 에러 발생과 상관없이 반드시 한 번 실행된다.
  console.log("finally");
}

// try...catch...finally 문으로 에러를 처리하면
// 프로그램이 강제 종료되지 않는다.
console.log("[End]");
```
