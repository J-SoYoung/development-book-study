
## **Date 생성자함수**
📕 notion : https://www.notion.so/fun-blog/30-Data-38076997ded642c3898c7de5ce93ecb1<br>

- 날짜,시간을 위한 메서드를 제공하는 빌트인 객체이면서 생성자함수이다.
- Date생성자 함수로 생성한 Date객체는 날짜 정보를 밀리 세컨드 단위로 저장한다. 1970년 1월 1일(UTC-세계협정시)이 기준 시점이 되며, 기본적으로 현재 날짜와 시간을 나타내는 정수값을 가진다. Date 생성자 함수에 명시적으로 해당 날짜와 시간 정보를 인수로 지정할 수도 있다.
- 한국 표준시(KST)는 세계협정시(UTC)보다 9시간이 빠르다. UTC 00:00은 KST 09:00AM 이다.
<br>

## 생성자 함수로 Date객체를 생성하는 방법
- new Date( ) , new Date( milliseconds ) , new Date( dateString ) , new Date( year,month,day…)
    
    - (1) new Date()<br>
    자바스크립트의 내장 객체인 Date로 객체를 만들면, 빈 객체가 아닌 현재 시간 정보가 객체 안에 자동 삽입됨, 인수 없이 new연산자를 호출하면 현재 날짜와 시간을 반환하는 Date 객체를 반환한다. 
    
    ```jsx
    let 객체명 = new Date();
    ```
    
## Date메서드
- get메서드는 Date객체의 특정 부분값을 반환하고 set메서드는 Date객체의 특정 부분값을 설정할 수 있다. 이를 활용해 Date객체의 날짜와 시간을 다룰 수 있다.<br>
- Date.now : UTC(협정 세계시)를 기점으로 현재 시간가지 경과한 밀리초를 숫자로 반환한다.
- Date.parse : UTC(협정 세계시)를 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
- date.prototype.toDateString : 문자열로 Date객체의 날짜를 반환한다
- date.prototype.toISOString : ISO 8601의 형식으로 Date객체의 날짜를 문자열로 반환한다
- Date객체의 Year, Month, date, day..
- date.prototype.getFullYear / date.prototype.setFullYear
- date.prototype.getMonth / date.prototype.setMonth
- date.prototype.getDate / date.prototype.setDate
- date.prototype.getDay / date.prototype.setDay
- date.prototype.getHours / date.prototype.setHours 
