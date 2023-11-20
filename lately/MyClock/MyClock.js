const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
//const AMPM = document.getElementById("ampm");

updateTime();
setInterval(updateTime , 1000);   

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    h = h < 10? "0" + h : h;
    m = m < 10? "0" + m : m;
    s = s < 10? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    document.getElementById("ampm").innerHTML = formatTime();


    function formatTime(){
        let AMorPM = h >= 12? "PM" : "AM"
        return `${AMorPM}`;
    }

};
