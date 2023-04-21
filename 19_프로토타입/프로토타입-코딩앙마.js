// https://www.youtube.com/watch?v=ddJcDZHBRm0 코딩앙마

//--------------------------------------------
// 공통된 부분이 있는 객체들이 있다. 
// 공통된 부분을 프로토로 설정해주면 proto에서 상속을 받아 사용할 수 있다
const bmw = {
  color : 'red',
  wheels : 4,
  drive(){
    console.log('drive!!')
  },
  navigator: 1,
};

const benz = {
  color : 'black',
  wheels : 4,
  drive(){
    console.log('drive!!')
  }
};

const audi = {
  color : 'blue',
  wheels : 4,
  drive(){
    console.log('drive!!')
  }
};


//--------------------------------------------
// 공통된 부분을 상위 객체로 빼서 proro로 연결해주면 데이터를 상속받아 사용할 수 있다.
// const car = {
//   wheels : 4,
//   drive(){
//     console.log('drive!!')
//   }
// };

// const bmw = {
//   color : 'red',
//   navigator: 1,
// };

// const benz = {
//   color : 'black',
// };

// const audi = {
//   color : 'blue',
// };

// car는 bmw의 프로토타입이 되고, 
// bmw는 car의 상속을 받는다
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

// console.log(bmw) // { color: 'red', navigator: 1 }
// console.log(bmw.color) // red
// console.log(bmw.wheels) // 4




//--------------------------------------------
// 새로운 객체 생성
const x5 = {
  color: 'white',
  name : 'x5'
}
// bmw눈 x5의 프로토타입이 되고
// x5는 bmw의 상속을 받는다
x5.__propto__ = bmw

// console.log(x5)


// 모든 프로토타입을 출력해볼 수 있다 
// for (p in bmw){
//   console.log(p)
// }

for (p in x5) {
  if (x5.hasOwnProperty(p)){
    console.log('o', p)
  }else {
    console.log('x', p)
  }
}