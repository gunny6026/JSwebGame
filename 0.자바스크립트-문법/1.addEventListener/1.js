let outer = document.getElementsByClassName('outer')[0];
let middle = document.getElementsByClassName('middle')[0];
let inner1 = document.getElementsByClassName('inner1')[0];
let inner2 = document.getElementsByClassName('inner2')[0];

let capture = {

    capture : true
};

let noneCapture = {

     capture : false
 };

let once = {
    once :true  // 한번만 실행 되는 함수
};
let nonOnce = {
    once : false
}
// once 를 추가하니깐 클릭 한 번만 적용이된다 
// 즉, alert가 한 번만 실행되고 이 후 계속 클릭해도 안나타남
outer.addEventListener('click', onceHandler , once) // 한번만 실행 됨
outer.addEventListener('click', noneOnceHandler , nonOnce)
middle.addEventListener('click', captureHandler ,capture);

function onceHandler(event){
    alert('outer , once')
    // console.log('sddasdsa',event.target);
}

 function noneOnceHandler(event){
        alert('outer, none-once, default');
}

function captureHandler(event) {
        //event.stopImmediatePropagation();
        alert('middle, capture');
    }