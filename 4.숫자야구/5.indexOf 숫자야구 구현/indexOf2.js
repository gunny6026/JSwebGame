var 바디 = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];

var 숫자배열 = [];


for(var i = 0; i< 4; i++){
  
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*9) -i ,1)[0]
                        
    숫자배열.push(뽑은것);
   
}

     console.log(숫자배열);
    
var 결과 = document.createElement('h1');
바디.append(결과);
var 안내문 = document.createElement('p');

바디.append(안내문);
안내문.textContent = "숫자 4자리를 입력하세요"


var 폼 = document.createElement('form');
바디.append(폼);


var 입력창 = document.createElement('input');
폼.append(입력창);


var 버튼 = document.createElement('button');
버튼.textContent = '입력'; 
폼.append(버튼);


입력창.type = 'number';
폼.addEventListener('submit', function 비동기(event){
    event.preventDefault();

    // var 답1 = Number(입력창.value);
    // console.log(typeof 답1); // number
    // console.log(typeof 입력창.value) // 숫자를 입력해도 string 

    var 답 = 입력창.value
    if(답 === ""){
        alert("숫자를 입력하세요 ")
    }else if(답.length !== 4){
        alert("숫자 4자리만 입력하세요")
        

    }else{
        if(답 === 숫자배열.join('')){  // 값이 같으면
            결과.textContent = " 홈런";
            입력창.value = "";
            입력창.focus();
            숫자후보 = [1,2,3,4,5,6,7,8,9];
            숫자배열 = [];
            for(var i = 0; i< 4; i++){
  
            var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*9) -i ,1)[0]
                                
            숫자배열.push(뽑은것);
            }
               console.log(숫자배열);

        }else{          // 값이 틀리면???
            for(var i = 0; i< 4; i++){
                
            }
        }
       

    }
})