### 클로저

함수와 함수가 선언된 렉시컬 환경의 조합이다. 

### inner함수는 outer함수의 변수에 접근할 수 없다. WHY?

- inner함수는 outer함수 내부에 호출되었지만, 전역에서 정의되었다. 함수가 선언될 때의 생성되는 렉시컬 환경의 외부 렉시컬 참조가 전역 객체로 연결되었기 때문에, 변수x를 검색하면 상위 스코프인 전역 객체에서 x값을 검색한다.
- 렉시컬 환경의 ‘외부 렉시컬 환경에 대한 참조 = 상위 스코프에 대한 참조’는 함수가 정의된 환경에 의해 결정된다.

```tsx
const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();
```

### 클로저와 렉시컬환경

- outer함수는 inner중첩함수를 반환하고 생명주기를 마감한다. 이후 inner함수가 실행될 때, console에는 outer함수의 변수 x값이 출력된다. 이미 생명 주기가 종료한 외부함수의 변수를 참조하는 중첩함수를 클로저라고 부른다. inner함수가 x값을 출력할 수 있었던 이유는 무엇인가?
- 그 이유는 inner함수가 선언될 때의 렉시컬 환경에 있다. inner함수가 정의될 때, 외부 렉시컬환경 참조는 outer함수를 가리키고 있기 때문에 outer함수가 소멸되었어도 변수값을 참조할 수 있다. inner함수는 자신의 내부 슬롯에 현재 실행중인 실행컨텍스트의 렉시컬 환경 = outer함수의 렉시컬 환경을 상위 스코프로 저장하고 있다

```tsx
const x = 1;

// ①
function outer() {
  const x = 10;
  const inner = function () { console.log(x); }; // ②
  return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10
```