# 구구단 만들기

`구구단.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="구구단.js"></script>
  </body>
</html>
```

`구구단.js`

```javascript
var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);

//ceil() 소수점 자리의 숫자를 무조건 올리는 함수
// Math.random()   0~1 까지 무작위의 수를 출력하는 함수 ex) 0.99992
var 바디 = document.body;
var 단어 = document.createElement("div");

단어.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";

바디.append(단어);

var 폼 = document.createElement("form");
바디.append(폼);

var 입력창 = document.createElement("input");
// 바디.append(입력창);
폼.append(입력창);

var 버튼 = document.createElement("button");
버튼.textContent = "입력";
// 바디.append(버튼);
폼.append(버튼);

// html로 만들면 3줄이면 끝나는데 자바스크립트로 하니깐 귀찮다. ㅇㅈ?

var 결과창 = document.createElement("div");
바디.append(결과창);

var 결과 = 숫자1 * 숫자2;

// 이벤트 리스너가 반복문 역할을 하고 있다. 하지만 이벤트리스너가 항상 반복문 역할을
// 하는 것은 아니다.
폼.addEventListener("submit", function 콜백함수(e) {
  e.preventDefault();
  if (결과 === Number(입력창.value)) {
    // 입력창.type ='number' 했으면ㄴ 위에 처럼 할 필요가 없다.
    결과창.textContent = "딩동댕";
    입력창.value = "";
    입력창.focus();
    // var를 빼버리면 변수에 새로운 값을 넣어 변경 하는 효과
    숫자1 = Math.ceil(Math.random() * 9);
    숫자2 = Math.ceil(Math.random() * 9);
    결과 = 숫자1 * 숫자2;
    // 마찬가지 결과도 var 빼고 한번 더 선언해줘야한다.
    // 그렇지 않으면 위에 var 결과 값은 처음에 선언한 결과가 계속 이어질것이다.
    // ex) 처음 나온것이 5 곱하기 3 이라면 계속 15를 입력해야 딩동댕이 나온다.
    단어.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";
  } else {
    결과창.textContent = "땡";
    입력창.value = "";
    입력창.focus();
  }
});
```
