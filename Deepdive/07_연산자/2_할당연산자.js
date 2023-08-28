var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5; 10 +5 더하고 할당한다
console.log(x); // 15

x -= 5; // x = x - 5; 15 -5 빼고 할당한다
console.log(x); // 10

x *= 5; // x = x * 5; 10 *5 곱하고 할당한다
console.log(x); // 50

x /= 5; // x = x / 5; 50 /5 나누고 할당한다
console.log(x); // 10

x %= 5; // x = x % 5; 10 %5 나머지가 없으니 0할당
console.log(x); // 0

var str = "My name is ";

// 문자열 연결 연산자
str += "Lee"; // str = str + 'Lee';
console.log(str); // 'My name is Lee'
