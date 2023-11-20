//1.declared element that we need
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const secs = document.getElementById("second");
const AMPM =document.getElementById("ampm");

//2.create a function to get a date from computer
function updateClock(){
    let h = new Date().getHours();//declred variable(temp) to stored date from com
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

//2.1 to change am pm
   if(h > 12){
      h = h - 12 ;
      ampm = "PM";
   }
   //2.5 h<10 ไหม ?ถ้าใช่ precede 0 ไปช้างหน้า : ถ้าไม่น้อยกว่า10 ก็แสดง h *เวลาฝรั่ง*
   h = h < 10? "0" + h : h;
   m = m < 10? "0" + m : m;
   s = s < 10? "0" + s : s;

   //2.3 set element that declared = date that we get from conputer using innerText
   hours.innerText = h;
   minutes.innerText = m;
   secs.innerText = s;
   AMPM.innerText = ampm;

   //2.4call funt every sec using "setTimeOut()"
   setTimeout( () => { updateClock()},1000)

}
//3 call a funtion
updateClock();