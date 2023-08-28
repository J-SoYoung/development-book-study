
## Regular Expression 정규 표현식

일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식언어이다. 정규식은 문자열을 대상으로 패턴 매칭 기능을 제공한다. 반복문과 조건문 없이 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있다. 

정규표현식은 패턴과 플래그로 구성된다. 패턴은 문자열의 일정한 규칙을 표현하기 위해 사용하며, 플래그는 검색 방식을 설정하기 위해 사용한다.

## RegExp 메서드

- **RegExp.prototype.test**
    
    인수로 전달받은 문자열→ 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환
    
    ```jsx
    // 사용자로부터 입력받은 휴대폰 전화번호
    const tel = '010-1234-567팔';
    
    // 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
    const regExp = /^\d{3}-\d{4}-\d{4}$/;
    
    // tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다.
    regExp.test(tel); // -> false
    ```
    

인수로 전달받은 문자열 / 대상 문자열에 대해 정규표현식 패턴을 검색해 결과를 배열로 반환

- RegExp.prototype.exec
- String.prototype.match
    
    

## 플래그

정규 표현식의 검색 방식을 설정하기 위해 사용한다.

- i : 대소문자를 구별하지 않고 패턴을 검색
- g : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다
- m : 문자열의 행이 바뀌더라도 패턴 검색을 계속한다

## 정규표현식 예제

- 아이디 사용 가능 검사
    
    ```jsx
    const id = 'abc123';
    
    // 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~ 10자리인지 검사한다.
    /^[A-Za-z0-9]{4,10}$/.test(id); // -> true
    ```
    

- 메일주소 형식 검사
    
    ```jsx
    const email = 'ungmo2@gmail.com';
    
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email); // -> true
    ```
    
- 핸드폰 번호 형식 검사
    
    ```jsx
    const cellphone = '010-1234-5678';
    
    /^\d{3}-\d{3,4}-\d{4}$/.test(cellphone); // -> true
    ```
    
- 사용 예
    
    ```jsx
    const expNameText = /[가-힣]+$/;
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9
        
        
        if(!expNameText.test(name.value)){
            alert('이름 형식을 확인하세요. 한글만 입력 가능합니다');
        } 
        // text() => 대응되는 문자열이 있는지 확인하는 method
    ```
    
    추가설명 : https://thdud4479.tistory.com/155?category=1037931