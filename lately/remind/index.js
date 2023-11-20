let date = new Date();


/*let year = date.getFullYear();
let month = date.getMonth();
let dateOfMonth = date.getDate();
let dayOfMonth = date.getDay();/*return day of week
let hour = date.getHours();
let minute = date.getMinutes();
let second =date.getSeconds();
let time = date.getTime();/*return the num of millisec since 1, 1907 00:00:00 *ref point*  

date.setFullYear(2024);
date.setMonth(5);
date.setDate(27);
date.setHours(8);
date.setMinutes(0);
date.setSeconds(0)*/

document.getElementById("myLabel").innerHTML = formatTime();

function formatDate(){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${year}/${month}/${day}`;
}

function formatTime(){
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let AMorPM = hour >= 12? "PM" : "AM"

    return `${hour}:${minute}:${second} ${AMorPM}` ;
}