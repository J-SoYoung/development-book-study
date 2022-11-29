const list = [
  {
    todo_id : 1,
    title: '리액트 공부',
    text: '자바스크립트가 이렇게나 어렵다니!',
    done: false,
  },
  {
    todo_id : 2,
    title: '리액트 숙제',
    text: '완성시켜보자',
    done: false,
  },
]


// 예제1 filter MDN --------------------------------------- 
// 모든 작은 값 걸러내기 ( filter에 함수를 매개변수로 넣어서 사용 )

// function isBigEnough(value) {
//   return value >= 10;
// }

// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered) //  [12, 130, 44]




// 예제2 filter MDN --------------------------------------- 
// JSON에서 무효한 항목 거르기
// var arr = [
//   { id: 15 },  { id: -1 },  { id: 0 },  { id: 3 },  { id: 12.2 },
//   { },  { id: null },  { id: NaN },  { id: 'undefined' }
// ];

// var invalidEntries = 0;

// function isNumber(obj) {
//   return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
// }

// function filterByID(item) {
//   if (isNumber(item.id) && item.id !== 0) {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// var arrByID = arr.filter(filterByID);

// console.log('Filtered Array\n', arrByID);
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log('Number of Invalid Entries = ', invalidEntries);
// // Number of Invalid Entries = 5




// 예제3 filter MDN --------------------------------------- 
// 배열 내용 검색
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

//검색 조건에 따른 배열 필터링(쿼리)

function filterItems(query) {
  console.log(query)
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
