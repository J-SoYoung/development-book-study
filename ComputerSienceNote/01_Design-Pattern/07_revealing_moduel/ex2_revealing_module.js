// 즉시 실행 함수를 통한 노출 모듈 패턴

const pukubu = ( () =>{ 
  const a = 1
  const b = ()=> 2
  const publics = {
    c : 2, d : ()=> 3
  }
  return publics
})()

// publics의 프로퍼티만 외부로 노출된다. 
// pukubu함수 내부에서 정의된 a와 b는 외부로 노출되지 않는다
console.log(pukubu) 