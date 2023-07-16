## 이벤트 타입

- 이벤트 종류를 나타내는 문자열이다.
  마우스 이벤트, 키보드 이벤트, 포커스 이벤트, Form이벤트, 값 변경 이벤트, DOM 뮤테이션, 뷰 이벤트, 리소스 이벤트 등이 있다. - **마우스 이벤트**
      | click | 마우스 버튼을 클릭했을 때 |
      | --- | --- |
      | dbclick | 마우스 버튼을 더블클릭 했을 때 |
      | mousedown | 마우스 버튼을 눌렀을 때 |
      | mouseup | 누르고 있던 마우스 버튼을 놓았을 때 |
      | mousemove | 마우스 커서를 움직였을 때 |
      | mouseenter | 마우스 커서를 html요소 안으로 이동했을 때 버블링X |
      | mouseover | 마우스 커서를 html요소 안으로 이동했을 때 버블링 됨 |
      | mouseleave | 마우스 커서를 html요소 밖으로 이동했을 때 버블링 X |
      | mouserout | 마우스 커서를 html요소 밖으로 이동했을 때 버블링 됨 |
      - **키보드 이벤트**

      | keydown | 모든 키를 눌렀을 때 발생한다 |
      | --- | --- |
      | keypress | 문자 키를 눌렀을 때 연속적으로 발생한다 |
      | keyup | 누르고 있던 키를 놓았을 때 한 번만 발생한다 |
      |  |  |
      - **포커스 이벤트**

      | focus | HTML요소가 포커스를 받았을 때 (버블링되지 않는다) |
      | --- | --- |
      | blur | HTML요소가 포커스를 잃었을 때 (버블링되지 않는다) |
      | focusin | HTML요소가 포커스를 받았을 때 (버블링 됨) |
      | focusout | HTML요소가 포커스를 잃었을 때 (버블링 됨) |
      - **폼 이벤트**

      | submit | 1. form요소 내의 input, select입력 필드 에서 엔터 키를 눌렀을 때
      2. form요소 내의 submit버튼 <button><input type='submit'> |
      | --- | --- |
      | reset | form요소 내의 reset 버튼을 클릭했을 때 (최근 사용x) |
      - **값 변경 이벤트**

      | input | input(text, checkbox, radio), select, textarea 요소 값 입력되었을 때 |
      | --- | --- |
      | change | input(text, checkbox, radio), select, textarea 요소 값이 변경되었을 때change이벤트는 html 포커스가 잃었을 때 사용자 입력이 종료되었다고 인식하여 발생한다. |
      | readystatechange | HTML문서 로드와 파싱 상태를 나타내는 document.readyState 프로퍼티 값
      ( interactive, complate 이 변경될때 ) |
      - **DOM 뮤테이트 이벤트**

      | DOMContentLoaded | HTML 문서의 로드와 파싱이 완료되어 DOM생성이 완료되었을 때 |
      | --- | --- |
      - **뷰 이벤트**

      | resize | 브라우저 윈도우의 크기를 리사이즈 할 때 연속적으로 발생한다. |
      | --- | --- |
      | scroll | 웹페이지 또는 HTML 요소를 스크롤 할 때 연속적으로 발생 |
      - **리소스 이벤트**

      | load | DOMContentLoaded 이벤트가 발생한 이후, 모든 리소스의 로딩이 완료되었을 때 |
      | --- | --- |
      | unload | 리소스가 언로드 될 때 ( 새 웹페이지를 요청한 경우 ) |
      | abort | 리소스 로딩이 중단되었을 때 |
      | error | 리소스 로딩이 실패했을 때 |

## 이벤트 핸들러 등록

이벤트 핸들러는 이벤트가 발생했을 때 브라우저에 의해 호출되는 함수다. 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 이벤트 핸들러 등록이라 한다. 이벤트 핸들러를 등록하는 방법으로는 3가지가 있다.

- **(1) 이벤트 핸들러 어트리뷰트 방식**
  HTML요소의 어트리뷰트에 직접 이벤트 핸들러 함수를 작성하는 방식이다. 이벤트 어트리트의 형태는 on 접두사 + click과 같은 이벤트 타입으로 이루어져 있다.
  이벤트 핸들러 코드가 HTML코드에 직접 포함되어 있으므로 코드의 가독성과 유지보수성이 나빠질 수 있는 단점이 있다. 이벤트 핸들러 어트리뷰트 방식은 컴포넌트를 기반으로 하는 프레임워트, 라이브러리인 React, Angular,Vue에서 사용한다.
  ```html
  <html>
    <body>
      // 어트리뷰트 값 ( 함수 호출문 할당 ) -> 어트리뷰트 이름과 동일한 이벤트
      핸들러함수의 인수로 전달
      <button onclick="sayHi('Lee')">Click me!</button>

      // 어트리뷰트 값 ( 함수 참조 ) -> 인수전달 어려움
      <button onclick="sayHi">Click me!</button>

      <script>
        function sayHi(name) {
          console.log(`Hi! ${name}.`);
        }
      </script>
    </body>
  </html>
  ```
- **(2) 이벤트 핸들러 프로퍼티 방식**
  이벤트 핸들러 프로퍼티 방식은 JavaScript에서 **이벤트 핸들러를 직접 프로퍼티에 등록하는 방식**이다. window객체와, DOM노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티를 가지고 있는데, 이벤트 핸들러 프로퍼티인 onclick에 이벤트 핸들러 함수를 직접 바인딩하면 이벤트 핸들러가 등록된다.
  이벤트 핸들러를 등록하려면 이벤트를 발생시킬 객체인 이벤트 타깃(button)과, 이벤트 종류를 나타내는 이벤트 타입(onclick), 이벤트 핸들러(functioni)를 지정해야 한다.
  ```html
  <html>
    <body>
      <button>Click me!</button>
      <script>
        const $button = document.querySelector("button");

        // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 직접 바인딩
        // $button.onclick = myFunction;
        $button.onclick = function () {
          console.log("button click");
        };
      </script>
    </body>
  </html>
  ```
- **(3) addEventListener 메서드 방식 : 인수를 통해 이벤트 발생**
  JavaScript에서 이벤트 핸들러를 등록하는 방식이다. HTML요소를 선택한 뒤, addEventListener메서드를 호출하여 이벤트 핸들러를 등록한다.
  EventTarget.prototype.addEventListener ( eventType, functionName,[ capture ] )
  - 첫 번째 매개변수 : 이벤트 타입 전달
    두 번째 매개변수 : 이벤트 핸들러 함수
    세 번째 매개변수 : 생략가능 capture 사용여부 - true : capturing, false : bubbling
  - addEventListener메서드는 이벤트 핸들러를 인수로 전달하여 동작한다. 이벤틀 핸들러를 인수로 전달하기 때문에 동일한 button요소에서 여러 개의 이벤트를 등록하여도 문제가 발생하지 않는다. 이벤트 캡쳐링, 버블링 등의 옵션을 다룰 수 있다.
  ```html
  <html>
    <body>
      <button>Click me!</button>
      <script>
        const $button = document.querySelector("button");
        $button.addEventListener("click", function () {
          console.log("button click");
        });
      </script>
    </body>
  </html>
  ```

## 이벤트 핸들러 제거

- addEventListener메서드로 등록한 이벤트는 removeEventListener로 제거할 수 있다.
  이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트는 null을 할당하여 이벤트를 제거할 수 있다.

```jsx
const $button = document.querySelector("button");

$button.addEventListener("click", handleClick);
$button.removeEventListener("click", handleClick); // 성공

// 기명함수를 이벤트 핸들러로 등록 이후 제거한다.
// 따라서 이벤트 핸들러는 단 한 번만 호출된다.
$button.addEventListener("click", function foo() {
  console.log("button click");
  $button.removeEventListener("click", foo);
});

// 이벤트 핸들러 프로퍼티 방식으로 이벤트 핸들러 등록
// 이벤트 핸들러 프로퍼티에 null을 할당하여 이벤트 핸들러를 제거.
$button.onclick = handleClick;
$button.onclick = null;
```

## 이벤트 객체

이벤트가 발생하면 자동으로 이벤트 객체가 동적으로 생성된다. 생성된 이벤트 객체는 이벤트 핸들러의 첫번째 인수로 전달되어 매개변수 e에 할당된다.

- 이벤트 객체는 생성자 함수에 의해 생성되기 때문에 프로토타입 체인의 일원이 된다.
- DOM내에서 발생한 이벤트에 의해 생성된 이벤트 객체는 공통 프로퍼티가 있고,
  Focus / Mouse / Keyboard 등의 하위 이벤트 타입에 따른 고유 프로퍼티가 정의돼 있다.

### 이벤트 객체의 공통 프로퍼티

- type : 이벤트 타입
- target : 이벤트를 발생시킨 DOM요소
- currentTarget : 이벤트 핸들러가 바인딩 된 DOM요소
- eventPhase : 이벤트 전파 단계 ( 0-이벤트 없음, 1-캡쳐링, 2-타깃, 3-버블링 )
- bubbles : 이벤트를 버블링으로 전파하는지 여부
- cancelable : preventDefault 메서드를 호출하여 기본 동작을 취소할 수 있는지 여부
- defaultPrevented : defaultPrevent메서드를 호출하여 이벤트를 취소했는지의 여부
- isTrusted : 사용자의 행위에 의해 발생한 이벤트인지 여부
- timeStamp : 이벤트가 발생한 시각부터 경과한 밀리초
