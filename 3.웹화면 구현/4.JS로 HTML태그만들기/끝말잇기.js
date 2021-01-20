var 바디 = document.body;
var 단어  = document.createElement('div');
단어.textContent = '제로초'; // 기억만하고 화면에 표시를 안해줌


바디.append(단어)  // =  document.body.append(단어); // 내가 직접 화면에 넣어줌

var 입력창 = document.createElement('input');
document.body.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '등록';
바디.append(버튼);

// html로 만들면 3줄이면 끝나는데 자바스크립트로 하니깐 귀찮다. ㅇㅈ?

var 결과창 = document.createElement('div');
바디.append(결과창);
console.log(바디);
console.log("edd: ",단어);

document.write('document 객체 !!')

//var word = '제로초';

// while(true){
//     var answer = prompt(word); // 제로초 글자 prompt 가 뜬다. 거기에 대한 값을 answer에 대입
//     if(word[word.length -1] === answer[0]){
//         alert('딩동댕');
//         word = answer;
//     }else{
//         alert('땡');
//         }
// }

// 자바스크립트의 핵심은 비동기 이다
// 그리고 비동기를 이해하려면 이벤트 리스너를 알아야한다.