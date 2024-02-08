// 클로저 연습하기
function range(start, end){
  start = Number(start) || 0

  //end가 없을 때 end를 넘길 수 있는 함수를 만들기 
  if ( end === undefined ){
    return function getEnd (end){
      return getRange(start, end)
    }
  }else {
    end = Number(end) || 0
    return getRange(start,end)
  }
}

function getRange(start,end) {
  const arr = []
  for (let i = start; i <= end; i++){
    arr.push(i)
  } 
  return arr
}

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3))     // [ㅅ3]
console.log(start3(8));     // [3,4,5,6,7,8]
// start3(0);     // []

// start4(6);     // [4,5,6]