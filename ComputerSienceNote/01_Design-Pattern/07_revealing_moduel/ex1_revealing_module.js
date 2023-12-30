// 노출 모듈 패턴을 사용해 객체 생성 함수를 구현

var Employee = function(id) {
   // Private Member
   var empControl = document.getElementById(id);
   // Private Function
   function doAssignName(firstName, lastName) {
      empControl.innerHTML = lastName + ', ' + firstName;
   }
   return {
      // Reveal Public Members
      assignEmployeeName: doAssignName
   }
}

var employee = new Employee(123);
console.log(employee)
employee.assignEmployeeName('Carson', 'Bill');
