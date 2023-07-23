## 호출 스케줄링

함수를 명시적으로 호출하지 않고, 일정 시간이 경과된 이후에 호출되도록 호출 예약을 위한 타이머 함수를 사용하는 것을 호출 스케줄링이라고 한다. 

- 자바스크립트는 타이머 생성 함수인 setTimeout, setInterval과 타이머 제거 함수인 clearTimeout, clearInterval을 제공하며 이는 호스트객체이다. setTimeout함수는 타이머 이후 한 번 동작하고, setInterval함수는 지정한 타이머 마다 반복 동작한다.
- 자바스크립트 엔진은 싱글스레드로 동작한다. 그렇기 때문에  타이머 함수는 비동기 처리 방식으로 동작한다

## 타이머 함수

- setTimeout / clearTimeout
    
    두 번째 인수로 전달받은 시간 이후, 첫 번째 인수로 전달받은 콜백함수가 단 한번 호출된다.  
    
    ```jsx
    const timeout = setTimeout(function, delay, [param1, param2 ...])
    ```
    
    - function : 타이머가 만료된 뒤 호출될 콜백함수
    - delay : 타이머 만료 시간
    - param1, param2 : 콜백함수에 전달해야 할 인수가 있는 경우 세번째 인수로 전달 가능
    
    ```jsx
    // 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
    // 이때 콜백 함수에 'Lee'가 인수로 전달된다.
    const timeout = setTimeout(name => console.log(`Hi! ${name}.`), 1000, 'Lee');
    
    // 타이머 취소, setTiemout의 콜백함수가 실행되지 않는다.
    clearTimeout(timeout)
    ```
    

- setInterval / clearInterval
    
    두 번째 인수로 전달받은 시간으로 콜백함수가 반복 호출된다.
    
    ```jsx
    const intervalTime = setInterval(function, delay, [param1, param2 ...])
    ```
    

## debounce디바운스 / throttle스로틀

디바운스와 스로틀은 짧은 시간 간격으로 연속해서 발생하는 이벤트를 그룹화해서 과도한 이벤트 핸들러의 호출을 방지하는 프로그래밍이다. 

- 디바운스
    
    짧은 시간 간격으로 이벤트가 연속 발생하면 이벤트 핸들러를 호출하지 않다가 일정 시간이 경과한 후에 이벤트를 그룹화 해서 **마지막에 이벤트 핸들러가 한 번만 호출되도록 한다.** 
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/216717ac-f70b-49a2-a7c1-9b2435d406c1/Untitled.png)
    
    - code
        
        ```html
        <!DOCTYPE html>
        <html>
        <body>
          <input type="text">
          <div class="msg"></div>
          <script>
            const $input = document.querySelector('input');
            const $msg = document.querySelector('.msg');
        
            const debounce = (callback, delay) => {
              let timerId;
              // debounce 함수는 timerId를 기억하는 클로저를 반환한다.
              return (...args) => {
                // delay가 경과하기 이전에 이벤트가 발생하면 이전 타이머를 취소하고
                // 새로운 타이머를 재설정한다.
                // 따라서 delay보다 짧은 간격으로 이벤트가 발생하면 callback은 호출되지 않는다.
                if (timerId) clearTimeout(timerId);
                timerId = setTimeout(callback, delay, ...args);
              };
            };
        
            // debounce 함수가 반환하는 클로저가 이벤트 핸들러로 등록된다.
            // 300ms보다 짧은 간격으로 input 이벤트가 발생하면 debounce 함수의 콜백 함수는
            // 호출되지 않다가 300ms 동안 input 이벤트가 더 이상 발생하면 한 번만 호출된다.
            $input.oninput = debounce(e => {
              $msg.textContent = e.target.value;
            }, 300);
          </script>
        </body>
        </html>
        ```
        
    
- 스로틀
    
    짧은 간 간격으로 이벤트가 연속 발생하는 이벤트를 그룹화해서 일정 시간 단위로 이벤트 핸들러가 **호출되도록 호출 추기를 만든다.** 
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/947306f1-4141-4fa2-aea7-595e0787b7e4/Untitled.png)