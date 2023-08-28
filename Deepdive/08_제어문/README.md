# Q. 질문

### 빈칸을 채워보자.

📕notion : https://www.notion.so/fun-blog/3-29-8-0da84dd5649646f387fd5151f3bdae4f

- 조건문의 if else문과 switch문의 차이점<br>
  if … else문은 ( ) 으로 실행할 코드 블록을 결정한다.
  switch문은 ( ) 에 따라 실행할 코드 블록을 결정할 때 사용한다.
  답 : 논리적 참, 거짓 / 다양한 상황 case <br>
  
- 블록문<br>
  자바스크립트는 블록문을 하나의 ( )취급한다.<br> 
  단독으로 사용할 수도 있으나 일반적으로 ( )이나 ( )를 정의할 때 사용하는 것이 일반적이다.<br>
  답 : 실행단위 / 제어문 / 함수<br>
  
- 반복문<br>
  조건의 평가 결과가 ( )인 경우 코드 블록을 실행한다.<br>
  그 후 조건식이 ( )이 될 때까지 반복된다. 자바스크립트는 3가지 반복문인 ( , , ) 을 제공한다<br>
  답 : 참, 거짓 / for while do-while<br>
  
- for문의 실행순서를 설명해보세요<br>
  ```
  for (var i = 0;   i < 2;   i++) {
    console.log(i);
  }
  ```
  조건식의 평가 결과가 true면 (     )이 실행된다. 이후 ( 000 )이 실행된다.<br>
  증감식이 종료되면 ( 000 )이 실행된다. for문에서 (00 000)의 순서는 가장 앞에 있지만 단 한 번만 실행되기 때문에<br>
  증감식 이후에는 ( 000 )이 실행된다.<br>
  답 : 코드블록, 콘솔등등 / 증감식 / 조건식 / 변수선언문 / 조건식<br>   
   
- countinue문을 사용한 아래 코드의 흐름을 설명해보세요.<br>
  ```
   var string = 'Hello World.';
    var search = 'l';
    var count = 0;

    for (var i = 0; i < string.length; i++) {
      if (string[i] !== search) continue;
      count++; 
    }
    console.log(count);
  ```
  답 : string의 i가 ‘l'이 아니면 continue를 실행하라는 의미. <br>
       string의 i가 ‘l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다. <br>
       continue 문이 실행되면 count++은 실행되지 않아서 결국엔 string의 i가 ‘l'여야 count가 증가함 <br>
       ⇒ count 3이나옴
