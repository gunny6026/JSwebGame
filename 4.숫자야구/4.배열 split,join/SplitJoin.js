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

var 폼 = document.createElement('form');
바디.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);


var 버튼 = document.createElement('button');
버튼.textContent = '입력'; 
폼.append(버튼);


폼.addEventListener('submit' , function 비동기(event){
    event.preventDefault();
    var 답 = Number(입력창.value);
   // console.log(답);
   // console.log(답.toString().length);
    if(답.toString().length !== 4){
        alert('숫자 4자리만 입력하세요')
    }else{

     //   console.log(답);
        //답 = 1234;
        //입력창.value = 1234;
        //console.log(답);
        //입력창.value = '';
        입력창.focus();

      //  console.log(숫자배열, 답 , 숫자배열 ===답); // [4,9,7,6] 1234 false
       // console.log(숫자배열.join('') , 숫자배열.join('') == 답 , 답);

       // console.log(숫자배열 ,숫자배열.join(''));  //[4,9,7,6]  "4976"
      //  console.log(숫자배열.join(',')); // 4,8,9,6
      if(답 == 숫자배열.join('')){
            결과.textContent = "홈런" ;
            입력창.value = "";
            입력창.focus();
            var 숫자후보 = [1,2,3,4,5,6,7,8,9];
            var 숫자배열 = [];


            for(var i = 0; i< 4; i++){
        
            var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*9) -i ,1)[0]
                                
            숫자배열.push(뽑은것);
   
            }
      }else{ // 답이 틀리면?

        

      }


    } // else

    
})




