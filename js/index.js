let myDate = new Date ;
let aiguilleSec = document.querySelector(".sec");
let aiguilleMin = document.querySelector(".min");
let aiguilleHours = document.querySelector(".hours");
let hours=0;
let minutes=0;
let seconds=0;

 function updateTime()
 {
    myDate = new Date ;
    hours = myDate.getHours()
    minutes = myDate.getMinutes()
    seconds = myDate.getSeconds()

    moveAiguille();   
}

function moveAiguille()
{
    aiguilleSec.style.transform ="rotate("+(seconds*6)+"deg)"; 
    aiguilleMin.style.transform ="rotate("+minutes*6+"deg)"; 
    aiguilleHours.style.transform ="rotate("+hours*30+"deg)"; 
}

 setInterval(updateTime,1000);