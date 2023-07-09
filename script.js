let timer= document.querySelector('.timer');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById('reset');

let sec= 0;
let min= 0;
let hrs= 0;
 

let timerId=null;
startBtn.addEventListener("click", function(){
    if(timerId!==null){
        clearInterval(timerId);

    }
    timerId=setInterval(startTimer, 1000);

});
stopBtn.addEventListener("click", function(){
   clearInterval(timerId);

});
resetBtn.addEventListener("click", function(){
    clearInterval(timerId);
   timer.innerHTML=`00 : 00 : 00`;
   sec =min=hrs=0;
 });

function startTimer(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hrs++;
        }
    }
let secString= sec<10 ? `0${sec}`:sec;
let minString= min<10 ? `0${min}`:min;
let hrsString= hrs<10 ? `0${hrs}`:hrs;
timer.innerHTML=`${ hrsString} :${ minString} :${ secString}`;

}
