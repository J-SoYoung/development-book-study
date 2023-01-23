과제 : https://ko.javascript.info/comparison

- 비교 연산자<br>
  5 > 4 → true<br>

- 문자열비교 : 사전순이다<br>
  "apple" > "pineapple" → false<br>

- 문자열비교 : 사전순이다
  "2" > "12" → true<br>

- 동등비교
  undefined == null → true<br>

- 일치비교 : 형까지 비교하기 때문에 false
  undefined === null → false<br>

- null과 줄바꿈 0비교, null은 undefined와 같음
  null == "\n0\n" → false<br>

- 이전보다 형까지 비교, 아예 다름
  null === +"\n0\n" → false<br>
