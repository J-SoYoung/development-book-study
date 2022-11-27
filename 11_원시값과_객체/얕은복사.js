const arr = [1, 2, 3];
const copy = [...arr];
// 원시값의 형태,
// copy2의 데이터를 바꿨을 때, 원본의 내용은 바뀌지 않음
// 깊은 복사

// 큰 집은 새 메모리에 각각 저장됨 ( 모양만 같고, 별개의 데이터 )
// console.log(arr === copy);
// copy[0]에 10을 할당했다.
copy[0] = 10;
// 원본객체는 변하지 않았다.
// 스프레드 연산자를 사용했을 때 원시값은 깊은복사를 한다
// console.log(arr);
// console.log(copy);

// 객체의 형태
const arr2 = [1, 2, 3, { name: "name" }];
const copy2 = [...arr2];

// 큰 집은 새 메모리에 각각 저장됨
console.log(arr2 === copy2);

copy2[0] = 10;
// console.log(copy2[0]);// 10
console.log(arr2[0]); // 1 (원본은 안바뀜)
console.log(copy2[0] === arr2[0]); //false

// 잘못친 코드ㅋㅋ
// 아래 코드는 객체 안에 원시값을 수정해 주는 것이기 때문에
// copy2[3] = { name: "thdud" };

// 객체에 동적으로 값을 할당해 준다
copy2[3].name = "thdud";

// 객체는 같은 주소값을 공유하고 있기 때문에
// 동적으로 값을 할당해주면 같이 변하게 된다.
// 깊은 복사가 되지 않은 것
console.log(copy2[3]);
console.log(arr2[3]);
console.log(copy2[3] === arr2[3]);
