# Q. Quiz
notion : https://www.notion.so/fun-blog/3-29-9-225085498cc44b009a3dd0452ea61214

- 자바스크립트는 개발자의 의도에 따라 타입을 변환할 수 있는 <br>
  명시적 타입 변환과 자바스크립트 엔진에 의해 암묵적으로 타입이 변환되는 암묵적 타입변환(-------) 이 있다.<br>
  답: 강제타입변환<br>
  
- 타입변환은 기존 변수 값을 (-------) 변경하는 것이 아니라 기존 원시값을 사용해 다른 타입의 새로운 원시값을 생성하는 것이다. <br>
  (-------) 이 표현식을 에러없이 평가하기 위해서 (-------) 한 번 사용하고 원래의 값으로 돌아간다. <br>
  답 : 재할당 하여 / 자바스크립트엔진  / 암묵적으로 타입을 변환해 <br>
    

- 아래의 결과는 타입에러가 나온다. 그 이유는 무엇이고, 어떻게 바꿔야 에러가 나지 않을지 단축평가를 사용해 고쳐보세요.
    
    ```jsx
    function getStringLength(str) {
      str = str
      return str.length;
    }
    getStringLength(); 
    // TypeError: Cannot read properties of undefined (reading 'length')
    ```
    
    - 답 : 변수에 매개변수를 넣지 않았으니 str은 값이 없다. 값이 없는 변수의 길이를 구하려고 하니 typeError가 발생하는 것이다.<br>
           논리합 단축평가로 '' 공백을 넣어 str이 false값이면 ''을 출력하도록 설정하면된다.
        
        ```jsx
        str = str || ""
        getStringLength(); // 0 
        ```
        
- 옵셔널 체이닝 ( ?. )은 (-------)를 사용한 단축평가를 대신하여 객체의 프로퍼티가 null인지 undefied인지 확인 할 수 있고, <br>
null병합 연산자 ( ?? ) 는 (-------)를 사용한 단축평가를 대신해 변수에 기본값을 설정할 수 있다.<br>
답 : 논리곱 연산자 / 논리합 연산자 <br>
  ```jsx
  var str = '';
  var length = str?.length;
  console.log(length); // 0

  var foo = null ?? 'default string';
  console.log(foo); // "default string"
  ```
