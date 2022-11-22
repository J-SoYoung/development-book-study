// 1_객체란, 프로퍼티(key, value)의 집합 = 객체는 값이다. = 변경 가능한 값이다


// 2_객체 리터럴에 의한 객체생성
// 리터럴 : 기호를 사용해 값을 생성하는 표기법 { } => 중괄호 표기법
var person = {
  name : 'jung',
  sayHello: function(){
    console.log(`Hello! My name is ${this.name}`)
    // 여기서 name을 하면 출력이 되지 않는 이유눈??
  }
}
console.log(typeof person)
// object
console.log(person)
// { name: 'jung', sayHello: [Function: sayHello] }


// 3_프로퍼티 
// 프로퍼티는 프로터피 값에 접근할 수 있는 이름으로서 식별자 역할을 한다. 
var person2 = {
  name : 'young',
  age : 20
}
console.log(person2,'원래 프로퍼티 값')

// 4_메서드
// 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로도 사용할 수 있다.
// 메서드는 객체에 묶여 있는 함수를 말한다
var circle = {
  radius : 5,

  getDiameter : function (){
    return 2 * this.radius;
    // this는 자신이 속한 객체를 가리키는 자기 참조 변수
  }
};
console.log(circle.getDiameter)

// 5_프로퍼티 값 갱신
var person2 = {
  name : 'Lee',
}
console.log(person2,'프로퍼티 값 갱신')

// 프로퍼티 동적 생성
person2.habbit = 'programming study'
console.log(person2)