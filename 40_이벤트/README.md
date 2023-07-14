## 이벤트 타입

- 이벤트 종류를 나타내는 문자열이다.
마우스 이벤트, 키보드 이벤트, 포커스 이벤트, Form이벤트, 값 변경 이벤트, DOM 뮤테이션, 뷰 이벤트, 리소스 이벤트 등이 있다.
    - **마우스 이벤트**
    
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
    
    이벤트 어트리트의 형태는 on 접두사 + click과 같은 이벤트 타입으로 이루어져 있다. 이벤트 핸들러 어트리뷰트 값으로 함수 호출문을 할당하면 이벤트 핸들러가 등록된다. 
    
    이벤트 핸들러의 어트리뷰트 값은 이벤트 핸들러의 함수 몸체를 의미한다. 
    
    ```html
    <html>
    	<body>
    		// 어트리뷰트 값 ( 함수 호출문 할당 ) -> 
    			 어트리뷰트 이름과 동일한 이벤트 핸들러함수의 인수로 전달
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
    
    이벤트 핸들러의 어트리뷰트 값은 이벤트 핸들러의 함수 몸체를 의미한다. 
    이벤트 핸들러의 어트리뷰트는 파싱되어 어트리뷰트 이름과 동일한 
    onclick이벤트 핸들러 프로퍼티에 할당한다. 
    function onclick(event) { sayHi ('Lee') }
    
    어트리뷰트 값으로 함수 참조를 할당한다면 
    이벤트 핸들러에 인수를 전달하기 어려워 이벤트 실행이 되지 않는다.
    ```
    
    이벤트 핸들러 어트리뷰트 방식은 컴포넌트를 기반으로 하는 프레임워트, 라이브러리인 React, Angular,Vue에서 사용한다. 
    
- **(2) 이벤트 핸들러 프로퍼티 방식**
    
    window객체와, DOM노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티를 가지고 있다. 이벤트 핸들러 프로퍼티는 on접두사와 click이벤트 타입으로 이루어져 있으며 이곳에 함수를 바인딩하면 이벤트 핸들러가 등록된다.
    
    이벤트 핸들러를 등록하려면 이벤트를 발생시킬 객체인 이벤트 타깃(button)과, 이벤트 종류를 나타내는 이벤트 타입(onclick), 이벤트 핸들러(functioni)를 지정해야 한다.
    
    ```html
    <html>
    	<body>
    	  <button>Click me!</button>
    	  <script>
    	    const $button = document.querySelector('button');
    	
    	    // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩
    	    $button.onclick = function () {
    	      console.log('button click');
    	    };
    	  </script>
    	</body>
    </html>
    ```
    
    이벤트 핸들러 프로퍼티 방식은 HTML과 JavaScript를 분리시켜 동작할 수 있지만 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩 할 수 있다는 단점이 있다. 
    
- **(3) addEventListener 메서드 방식 : 인수를 통해 이벤트 발생**
    
    EventTarget.prototype.addEventListener ( eventType, functionName,[ capture ] ) 
    
    - 첫 번째 매개변수 : 이벤트 타입 전달
    두 번째 매개변수 : 이벤트 핸들러 함수
    세 번째 매개변수 : 생략가능 capture 사용여부 - true : capturing, false : bubbling
    
    ```html
    <html>
    	<body>
    	  <button>Click me!</button>
    	  <script>
    	    const $button = document.querySelector('button');
    	    $button.addEventListener('click', function () {
    	      console.log('button click');
    	    });
    	  </script>
    	</body>
    </html>
    ```
    
    addEventListener메서드는 이벤트 핸들러를 인수로 전달하여 동작한다. 이벤틀 핸들러를 인수로 전달하기 때문에 동일한 button요소에서 여러 개의 이벤트를 등록하여도 문제가 발생하지 않는다.
    
    ⇒ addEventListener는 동일한 HTML요소에 여러 개의 이벤트 핸들러를 등록할 수 있다.