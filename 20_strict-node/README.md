# strict mode

strict mode는 자바스크립트 언어의 문법을 엄격히 적용한다. 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 에러를 발생시킨다.

### strict mode 적용

전역의 선두 또는 함수 몸체의 선두에 ‘use strict’; 를 추가한다. 코드의 선두에 위치시키지 안흐면 제대로 동작하지 않는다. 

```jsx
// 전역의 선두에 strict모드 추가
'use strict';

function foo() {
	// 또는 함수의 선두에 strict모드 추가
	'use strict';
  x = 10; // ReferenceError: x is not defined
}
foo();
```

### strict mode 주의사항

- 전역에 strict mode를 추가하는 것은 피하자.
외부 라이브러리를 사용하는 경우 non-strict-mode인 경우도 있기 때문에 전역으로 사용하는 것은 바람직하지 않다….
- 함수 단위로 strict mode를 추가하는 것도 피하자.

### strict mode가 발생시키는 에러

- 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다
- delete 연산자로 변수,함수, 매개변수를 삭제하면 SyntaxError가 발생한다
- 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다