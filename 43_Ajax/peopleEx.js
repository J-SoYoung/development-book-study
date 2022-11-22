// https://cl0clam.tistory.com/3
// XMLHttpRequest객체생성
let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "people.json", true);
  
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let storage = JSON.parse(this.response);
      for(i in storage.data) {
        let tr = document.createElement('tr');
        for(let j = 0; j < 4; j++) {
          let td = document.createElement('td');
          td.innerHTML = storage.data[i][j];
          tr.appendChild(td);
        }
        document.querySelector("tbody").appendChild(tr);
      }
    }
  };
  xhttp.send();




  
  // xhttp.onreadystatechange = function() {
  //   if(this.readyState == 4 && this.status == 200) {
  //     //readyState가 4라는 것은 요청에 대한 준비가 되었고 응답할 준비가 되었다는 말이다.
  //     //status가 200이라는 것은 http응답 코드가 200이라는 것이다.
  //     let storage = JSON.parse(this.response);
  //     //response메소드를 통해 JSON 파일에 접근할 수 있다.
  //     //잘 이해가 안된다면 console.log(this.response)를 대신 넣어서 무엇이 출력되는지 보자 
  //     for(i in storage.data) {//JSON파일 안에있는 data를 처음부터 끝까지 읽는 과정이다.
  //       let tr = document.createElement('tr');//tr태그를 만들고
  //       for(let j = 0; j < 4; j++) {
  //         //한 사람당 정보가 이름, 전화번호, 이메일, 회사 이렇게 4개 있다.
  //         //따라서 4번 반복하는 for문을 만들어 각각 td태그에 넣어주자.
  //         let td = document.createElement('td');
  //         td.innerHTML = storage.data[i][j];//i번째 사람의 j(이름, 전화번호 등)정보
  //         tr.appendChild(td);
  //         //tr태그에 차례대로 붙여준다.
  //       }
  //       document.querySelector("tbody").appendChild(tr);//tbody안에 또 붙여준다.
  //     }
  //   }
  // };