// finally키워드를 꼭 사용해야 하나요?

// finally키워드 사용 안했을 때
// return구문을 만나면 try-catch 문을 빠져나간다. 마지막 C위치를 출력하지 않고 나가버림
// function test() {
//   try {
//     console.log('A 위치입니다.')
//     // throw "예외 강제 발생"
//   } catch (exception) {
//     console.log('B 위치입니다.')
//     return
//   } 
//   console.log('C 위치입니다.')
// }
// test()


// finally키워드 사용 했을 때
// return 키워드를 사용했음에도 불구하고 마지막 finally 구문을 출력하고 프로그램 종료
function test() {
  try {
    console.log('A 위치입니다.')
    throw "예외 강제 발생"
  } catch (exception) {
    console.log('B 위치입니다.')
    return
  } finally {
    console.log('C 위치입니다.')
  }
}

test()
