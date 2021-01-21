# 이벤트 리스너 맛보기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- <div>제로초</div>
    <form action="">
        <input type="text "/>
        <button>등록</button>
    </form>
    <div>딩동댕</div> -->
    <script src="이벤트리스너.js"></script>
  </body>
</html>
```

```javascript
var 바디 = document.body;

var 단어 = document.createElement("div");
단어.textContent = "제로초";
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

// 자바스크립트는 함수에 굳이 이름을 붙일 필요가 없다.
// 폼 안에 있는 input은 엔터키를 사용 할 수 있다.
// 폼 태그 안에 입력창을 넣으면 브라우저가 새로고침을 해준다.
//왜냐하면 폼은 다른페이지로 가거나, 새로고침을 하는 것이 기본 동작이기 때문이다.
// 그때 사용하는 것이 preventDefault()이다.
폼.addEventListener("submit", function 콜백함수(이벤트) {
  이벤트.preventDefault();
  if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
    결과창.textContent = "딩동댕";
    // 익숙하지 않으면 콘솔에 찍어봐라
    단어.textContent = 입력창.value;
    입력창.value = "";
    입력창.focus(); // 입력을 누르고 입력창에 계속 커서가 가있게
  } else {
    결과창.textContent = "땡";
    입력창.focus();
  }
});

// addEventListener('a','b');

//var word = '제로초';

// while(true){
// var answer = prompt(word); // 제로초 글자 prompt 가 뜬다. 거기에 대한 값을 answer에 대입
// if(word[word.length -1] === answer[0]){
// alert('딩동댕');
// word = answer;
// }else{
// alert('땡');
// }
// }

// 자바스크립트의 핵심은 비동기 이다
// 그리고 비동기를 이해하려면 이벤트 리스너를 알아야한다.
```
