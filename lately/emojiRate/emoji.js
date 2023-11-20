//1.declared variable that need
const star = document.querySelectorAll(".fa-solid");
const emoji = document.querySelectorAll(".fa-solid");

//2.add event to all of star, but 1st we need to loop through 5 ele of array
//2.1 using forEach iterate over star element and add event "click" to each element
star.forEach((star, index)=>{
    star.addEventListener("click", () => {
        updateRating(index);
    });
});



//2.2 declared updateRating() to add active(color gold) to star
function updateRating(index){
    star.forEach((star, idx) => {
        if(idx < index +1){
            star.classList.add("active");
        }
        else{
            star.classList.remove("active");
        }
    })
}
//3.change emoji related to the rating ; chang the translate x associate with star
