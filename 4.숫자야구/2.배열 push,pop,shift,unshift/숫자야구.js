var 바디 = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];
// 배열이나 객체를 사용하는 것이 깔끔하다.
// 예를 들어
// var 일 = 1;
// var 이 = 2;
// ... 하면 코드가 지저분 해진다.
var 숫자배열 = [];

//var 뽑은것 = 숫자후보.pop();
//console.log( 숫자후보.pop());
// console.log( 숫자후보.pop());
// console.log( 숫자후보.pop());
// console.log('뽑은것 :',뽑은것)
// var pop1 = 숫자후보.pop();
// var shift = 숫자후보.shift();
// var push = 숫자후보.push();
// console.log(pop1);
// console.log(shift);
// console.log(push);
for(var i = 0; i< 4; i++){

    var pop = 숫자후보.pop(); 
    숫자배열.push(pop);
}
    
    

console.log(pop);
console.log(숫자배열);

var 결과 = document.createElement('h1');
바디.append(결과);

var 폼 = document.createElement('form');
바디.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);


var 버튼 = document.createElement('button');
버튼.textContent = '입력'; 
폼.append(버튼);

var 결과창 = document.createElement('div');
바디.append(결과창);





