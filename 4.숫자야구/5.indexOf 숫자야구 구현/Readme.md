# indexOf

```javascript

var 배열 [4,5,2,6]

배열.indexOf(4)   //  숫자 4는 배열의 0번재 위치
0

배열.indexOf(5) // 숫자 5는 배열의 1번째 위치
1

배열.indexOf(2)
2

배열.indexOf(6)
3

배열.indexOf(1)  // 숫자 1는 배열 어디에도 없음 -1 리턴
-1
배열.indexOf(3) // 이하 동일
-1
배열.indexOf(7)
-1
배열.indexOf(0)
-1


```

## typeof

```javascript
var 숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var 숫자배열 = [];

for (var i = 0; i < 4; i++) {
  var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * 9) - i, 1)[0];

  숫자배열.push(뽑은것);
}
```

```javascript
var 답 = 입력창.value;

console.log("답의 타입은 ?? : ", typeof 답); // string
console.log("숫자배열.join의 타입은 ? : ", typeof 숫자배열.join("")); // string
```
