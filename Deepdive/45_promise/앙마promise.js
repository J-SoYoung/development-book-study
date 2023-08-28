// // 비동기처리 
// const f1 = () =>{
//   setTimeout(function(){
//     console.log('1번 주문 완료')
//     callback()
//   }, 1000)
// };

// const f2 = (callback) =>{
//   setTimeout(function(){
//     console.log('2번 주문 완료')
//     callback()
//   }, 2000)
// };

// const f3 = (callback) =>{
//   setTimeout(function(){
//     console.log('3번 주문 완료')
//     callback()
//   }, 3000)
// };

// callback hell
// console.log('시작')
// f1(function(){
//   f2(function(){
//     f3(function(){
//       console.log('끝')
//     })
//   })
// })


// promise를 사용한 코드
const f1 = () =>{
  return new Promise((res, rej)=>{
    setTimeout(() =>{
      res('1번 주문 완료')
    }, 1000)
  })
};

const f2 = (message) =>{
  console.log(message)
  return new Promise((res, rej)=>{
    setTimeout(() =>{
      res('2번 주문 완료')
    }, 2000)
  })
};

const f3 = (message) =>{
  console.log(message)
  return new Promise((res, rej)=>{
    setTimeout(() =>{
      res('3번 주문 완료')
    }, 3000)
  })
};


//promise
// console.log('시작')
// f1()
//   .then((res)=>f2(res))
//   .then((res)=>f3(res))
//   .then((res)=>console.log(res))
//   .catch(console.log)
//   .finally(()=>{
//     console.log('끝')
//   })
  // f1은 promise를 반환한다. resolve 함수를 실행하고 2번에 보냄


// Promise.all
// 각 코드간 비동기 작업에 영향을 주지 않는다면 
// 작업을 병렬적으로 할 수 있다. 
// 모든 비동기 작업이 끝나야 출력할 수 있다.
// 병렬적으로 시행하면 시간을 더 단축시킬 수 있다.

// time으로 시간을 확인할 수 있다.
console.time('x');
Promise.all([f1(), f2(), f3()])
  .then ((res)=>{
    console.log(res)
    console.timeEnd('x');
  })

// Promie.race
// 먼저 끝난 비동기 작업만 출력한다
console.time('x');
Promise.all([f1(), f2(), f3()])
  .then ((res)=>{
    console.log(res)
    console.timeEnd('x');
  })