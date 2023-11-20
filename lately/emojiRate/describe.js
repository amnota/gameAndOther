//1.declared variable that need
const star = document.querySelectorAll(".fa-solid");

//2.add event to all of star, but 1st we need to loop through 5 ele of array

//2.1 using forEach iterate over star element and add event "click" to each element
star.forEach((star, index)=>{//loop through ได้ แต่ละ index ของ star ออกมาละ
    star.addEventListener("click", () => {
        updateRating(index);//addEvent ให้แต่ละindex so index= star that click
    });
});

/*check the addeventlistenr is working by 1.add "index" after star 2. console.log("clicked", index)
3.open console and click on the star if it's working it will be shown */

//2.2 declared updateRating() to add active(color gold) to star
function updateRating(index){
    star.forEach((star, idx) => {/*we loop through star again to add "class active" which style a star to gold color  we get ele and index here idx ที่ได้ คือ star เปล่าๆ*/
        if(idx < index +1){//ถ้า idx < index(ที่คลิก) ให้ +1 to get exactly number  เพราะ start from 0
            star.classList.add("active");// add active class(gold) using classList.add
        }
        else{//if we click on the 4th then click on 3rd 4th still gold because ide > index(click) ไปซะแล้ว so declared else
            star.classList.remove("active");
        }
    })
}
/* array.forEach(callback)
ใช้ foreach iterate over element of star and past a callback  the callback is add event to each star the event is "click" so when click update rating will be execute "  */