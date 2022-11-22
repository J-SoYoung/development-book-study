// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('GET', 'users')

// HTTP 요청 헤더 설정
// 'content-type'=>  클라이언트가 서버로 전송할 데이터의 타입 설정 : json
// 'accept' => 서버가 응답할 데이터 타입 : json 
xhr.setRequestHeader('content-type', 'application/json')
xhr.setRequestHeader('accept', 'application/json')


// HTTP 요청 천송
xhr.send(JSON.stringify({id: 1, content: 'HTML', complated: false}))


