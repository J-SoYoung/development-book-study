// 얕은복사 원시값
const a = '1'
let b = a   // b는 a의 값을 할당

console.log(`a값 ${a}, b값 ${b}`)
console.log(a === b) // a와 b는 같은 값을 공유하고 있습니다

b = '2' //b에 2를 재할당 합니다
console.log(`a값 ${a}, b값 ${b}`) // a와 b는 각각 다른 값을 가짐




// 얕은복사 객체
const c = { one: 1, two: 2, };
let d = c;  // d는 c의 값을 복사

console.log(c)
console.log(d)
console.log(c===d)// a와 b는 같은 주소를 공유하고 있습니다
                  // 노션 사진 (객체는 값이 아닌 주소값을 공유)

d.one = 3;        
// d에 값을 재할당 합니다, 
// 원시값이라면 d의 값만 바뀌어야 하는데
// 객체이기 때문에 같은 주소로 연결된 모든 값들이 바뀝니다


console.log(c); // { one: 3, two: 2 } 출력
console.log(d); // { one: 3, two: 2 } 출력 
//여기까지 노션 정리부분  




// 노션에 없음
//--------------------스프레드 문법을 사용한 복사 (원시값)
const arr = [1, 2, 3];
const copy = [...arr];
// copy2의 데이터를 바꿨을 때, 원본의 내용은 바뀌지 않음
// 깊은 복사

// 큰 집은 새 메모리에 각각 저장됨 ( 모양만 같고, 별개의 데이터 )
console.log(arr === copy);


// copy[0]에 10을 할당했다.
copy[0] = 10;

// 원본객체는 변하지 않았다.
// 스프레드 연산자를 사용했을 때 원시값은 깊은복사를 한다
console.log(arr);
console.log(copy);



//--------------------스프레드 문법을 사용한 복사 (객체값)
const arr2 = [1, 2, 3, { name: "name" }];
const copy2 = [...arr2];

// 큰 집은 새 메모리에 각각 저장됨
console.log(arr2 === copy2); // false


copy2[0] = 10;
console.log(copy2[0]);// 10
console.log(arr2[0]); // 1 (원본은 안바뀜)
console.log(copy2[0] === arr2[0]); //false


// 객체에 동적으로 값을 할당해 준다
copy2[3].name = "thdud";

// 객체는 같은 주소값을 공유하고 있기 때문에
// 동적으로 값을 할당해주면 같이 변하게 된다.
// 깊은 복사가 되지 않은 것
console.log(copy2[3]);
console.log(arr2[3]);
console.log(copy2[3] === arr2[3]);
