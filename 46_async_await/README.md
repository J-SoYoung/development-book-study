### 제너레이터

- JavaScript의 제너레이터는 함수의 실행을 일시적으로 중단하고 나중에 다시 시작할 수 있는 기능을 제공하는 객체다. 이를 통해 비동기적인 코드를 동기적으로 작성하는 것과 비슷한 방식으로 코드를 작성할 수 있다.
- 제너레이터 함수는 함수 내에서 **`yield`** 키워드를 사용하여 값을 생성하고 호출자에게 반환할 수 있다. 호출자는 제너레이터 함수를 호출하여 제너레이터 객체를 얻고, **`next()`** 메서드를 사용하여 함수의 실행을 제어할 수 있다.

### async-await

async-await은 비동기적인 코드를 동기적인 코드처럼 작성할 수 있도록 도와주는 JavaScript의 문법적 기능이다. async함수는 항상 Promise객체를 반환하며, await키워드를 사용해 Promise가 완료될 때까지 기다리는 동안 함수의 실행을 일시 중단한다.

이를 사용하면 then, catch, finally 후속처리 메서드에 콜백함수를 전달해 처리할 필요없이 동기처럼 프로미스를 사용할 수 있다.

- async함수는 async키워드를 사용해 정의하며 언제나 프로미스를 반환한다.
- await키워드는 async함수 내부에서 사용해야 한다. 프로미스가 비동기 처리가 완료된 후에 처리 결과를 반환한다. await키워드는 반드시 프로미스 앞에서 사용해야 한다.

### error처리

- try…catch문을 사용한다.
async함수 내부에서 결과가 나올 때까지 함수 실행을 중지하게 된다. 이후, awiat결과가 출력이 되면 catch로 에러를 찾을 수 있다.
    
    ```jsx
    const fetch = require('node-fetch');
    
    const foo = async () => {
      try {
        const wrongUrl = 'https://wrong.url';
    
        const response = await fetch(wrongUrl);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err); // TypeError: Failed to fetch
      }
    };
    
    foo();
    ```
    
- catch문을 사용하지 않는 경우, async함수는 reject하는 프로미스를 반환하게 된다. 이후 후속처리 메서드 catch를 사용해 에러를 캐치할 수 있다.
    
    ```jsx
    const fetch = require('node-fetch');
    
    const foo = async () => {
      const wrongUrl = 'https://wrong.url';
    
      const response = await fetch(wrongUrl);
      const data = await response.json();
      return data;
    };
    
    foo()
      .then(console.log)
      .catch(console.error); // TypeError: Failed to fetch
    ```