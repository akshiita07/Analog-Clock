let hour=document.getElementById('hours');
let min=document.getElementById('minutes');
let secs=document.getElementById('seconds');


setInterval(()=>{
    let date= new Date();
    hours=date.getHours();
    mins=date.getMinutes();
    sec=date.getSeconds();

    //adding formulas
// 24hr-- 360deg so 1hr-> 360/24=30 so 1hr rotation takes 30degrees*no of hrs + no of mins/2
//60mins->360deg        so 1min->360/60=6 so 1min rotation takes 6 degrees*no of mins
//60sec->360deg        so 1sec->360/60=6 so 1sec rotation takes 6 degrees*no of sec

    hrrotation=(30*hours)+(mins/2);
    minrotation=6*mins;
    secrotation=6*sec;

    hour.style.transform=`rotate(${hrrotation}deg)`;
    min.style.transform=`rotate(${minrotation}deg)`;
    secs.style.transform=`rotate(${secrotation}deg)`;

    //also transform rotate always rotates from center so it must be let to bottom using css transform-origin: bottom


},1000)     //in each se ie 1000ms