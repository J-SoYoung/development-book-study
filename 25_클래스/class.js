// 비슷한 내용의 객체를 생성할 때는 class를 사용해라
// var nunu = {
//   skill: "consume",
//   attribute: "snowball",
// };
// var garen = {
//   skill: "strike",
//   attribute: "courage",
// };

class Character {
  constructor(skill = "", attribute = "") {
    this.skill = skill;
    this.attribute = attribute;
  }
}
var nunu = new Character("consume", "snowball");
var garen = new Character("strike", "courage");
console.log(nunu, garen);
