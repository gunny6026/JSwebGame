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

var 값들 = document.createElement("p")

바디.append(값들);

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
                var 틀린횟수 = 0;
            if(답 === 숫자배열.join('')){  // 값이 같으면
                결과.textContent = " 홈런";
              
                입력창.focus();
                값들.textContent = "정답: " + 숫자배열.join('');
                숫자후보 = [1,2,3,4,5,6,7,8,9];
                숫자배열 = [];
                for(var i = 0; i< 4; i++){
    
                var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*9) -i ,1)[0]
                                    
                숫자배열.push(뽑은것);
                }
                console.log(숫자배열);
                
                
                틀린횟수  = 0;
                
                                
                // 틀린횟수가 올라가지 않음 왜냐하면 var 틀린횟수 =0 선언을
                // 이벤트 리스터 안에서 했기 때문이다. refactoring.js에서는 구현이 잘됨
            }else{          // 값이 틀리면???
             
                틀린횟수 = 틀린횟수 + 1; 
                var 스트라이크 = 0;
                var 볼 = 0;
                var 답배열 = 답.split('');
                
                console.log("틀린횟수 : " +틀린횟수)
                console.log(typeof 틀린횟수)
                console.log(답배열)
                if(틀린횟수 > 3){
                    결과.textContent = "10번 넘게 틀려서 실패 답은 : "+ 숫자배열.join('');
                    입력창.value = '';
                    입력창.focus();
                }else{
                    
                    for(var i = 0; i< 4; i++){  
                       
    
                        if(답배열[i] == 숫자배열[i]){  // 스트라이크
                             스트라이크 += 1;
                             입력창.focus();
                             
                        }else if(숫자배열.indexOf(Number(답배열[i])) != -1){
                                // 볼
                                볼 += 1;
                            입력창.focus();
                            
                        }
                        
                        
                        
                        결과.textContent = 스트라이크 +"스트라이크 " + 볼 + " 볼입니다.";
                    }
                    for(var i=0; i<10; i++){

                        값들.textContent = "입력한 답 : " + 답;
                    }
                } // 틀린횟수 > 10 else
                
            } // 값이 틀리면 else 

       

    }
})