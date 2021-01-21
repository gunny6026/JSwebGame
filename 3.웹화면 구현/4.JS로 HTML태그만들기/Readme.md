# DOM

![image](https://user-images.githubusercontent.com/66653324/105151373-3aaba600-5b49-11eb-9615-ce93caa6818c.png)

## document

document는 window 안에 있는 브라우저가 지원하는 객체이고,
html 태그를 가리키고 있으며 html 태그를 자바스크립트로 번역해주는
통역사의 역할을 한다.

 <br/>
document 객체를 활용하여
javascript 코드로 html 화면을 만들어보았다.

```javascript
var 바디 = document.body;
var 단어 = document.createElement("div");
단어.textContent = "제로초"; // 기억만하고 화면에 표시를 안해줌

바디.append(단어); // =  document.body.append(단어); // 내가 직접 화면에 넣어줌

var 입력창 = document.createElement("input");
document.body.append(입력창);
var 버튼 = document.createElement("button");
버튼.textContent = "등록";
바디.append(버튼);

// html로 만들면 3줄이면 끝나는데 자바스크립트로 하니깐 귀찮다. ㅇㅈ?

var 결과창 = document.createElement("div");
바디.append(결과창);
console.log(바디);
console.log("edd: ", 단어);

document.write("document 객체 !!");
```

document를 이용해서 자바스크립트 코드를 html 브라우저에서 활용할 수 있게되었다.
