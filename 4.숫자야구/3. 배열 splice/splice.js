var 바디 = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];

var 숫자배열 = [];

// spice(위치,개수)
// var 뽑은것 = 숫자후보.splice(3,1);
// console.log(뽑은것); // [4]
// 숫자배열.push(뽑은것);

// console.log(숫자배열);

// 뽑은것 = 숫자후보.splice(2,5);
// console.log(뽑은것); // [3,5,6,7,8]

// var ss = 숫자후보.splice(2,5);
// console.log(ss)  // [3,5,6,7,8]

//console.log(숫자후보.splice(2,5)) // [3,5,6,7,8]
// console.log(숫자후보.splice(2,5)[0])  //3 
for(var i = 0; i< 4; i++){
  //  하나씩 뽑으면 숫자후보에 배열의 값이 하나씩 사라진다. 
    //그렇기 때문에 거기에 맞는 자리수대로 뽑이야함
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*9) -i ,1)[0]
                            //floor() 소수점 아래를 무조건 무시  0~8 까지 필요하니깐
                            // 뒤에[0]을 안붙이면 [4] 와 같이 배열 자체를 뽑는 것이라서
                            // push를 하면 배열안에 값이 1개 있는 배열4개가 들어가게 된다.
                            // 그래서 뒤에 [0]을 붙여야한다.
    숫자배열.push(뽑은것);
   
}
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





