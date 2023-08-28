{
  name :" thduid"
  
}

// JSON.stringify
const obj = {
  name : 'jung',
  age : 20,
  alive : true,
  hobby : ['tralveling', 'tennis'] 
};

// 객체를 JSON포맷의 문자열로 변환 = 직렬화
const json = JSON.stringify(obj);
// console.log(typeof json, json)

// 문자열 변화 + 들여쓰기를 한다
const prettyJson = JSON.stringify(obj, null, 2);
// console.log(typeof prettyJson, prettyJson)


// 배열도 JSON포맷의 문자열로 변환
const todos = [
  { id: 1, content: 'HTML', complated: false},
  { id: 2, content: 'CSS', complated: true},
  { id: 3, content: 'JavaScript', complated: false},
];

const todosJson = JSON.stringify(todos, null, 2)
// console.log(typeof todosJson, todosJson)


// JSON.parse
// JSON포맷의 문자열을 객체로 변환한다. = 역직렬화
const obj2 = {
  name : 'soyoung',
  age : 20,
  alive : false,
  hobby : ['coding', 'running'] 
};

// 객체 -> JSON문자열로
const obj2Json = JSON.stringify(obj);
// JSON문자열 -> 객체
const obj2Parse = JSON.parse(obj2Json);
console.log(obj2Json,'json형태')
console.log(obj2Parse,'객체형태')
