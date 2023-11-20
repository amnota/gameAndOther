let student = ["spongeBob", "patrick", "squidward"];
student.forEach(capitalized);//array.forEach(callback)
student.forEach(print);


/*define a function that capitalized the 1st letter of string
 forEach provide  3 arrgument to access (element, index, array) */

function capitalized(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1) //เปลี่ยนภายใน element ที่0 ของ index จะเปลี่ยนเป็น uppercase แล้ว+ ตั้งแต่ element ที่ 1 ของ index เป้นต้นไป ถ้าไม่ + มันจะแสดงแค่ตัวแรก(element[0])
}
console.log(student[1]);//จะให้แสดงarray ที่เท่าไหร่ให้มากำหนดตรงนี้ index = ตำแหน่งของ student ใน array


// function that print each element in the array
function print(element){
    console.log(element)
}