/* callback = function passed as an arg to another function
              a fuction not going to run untill sime task complete*/
 
/* GENERAL FUNC              
let total = sum(2, 3);
let total2 = sum(7, 3);

displayConsole(total2);
displayDOM(total2);

function sum(x, y){
    let result = x + y;
    return result;
}

function displayConsole(output){
    console.log(output);
};

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output
}
*/

//CALLBACK 

sum(5, 3, displayDOM)

function sum(x, y, callback){//passed a callback fn อะไรก็ได้ ใน function sum โดยจะ run callback after sum
    let result = x + y;
    callback(result);
}
function displayConsole(output){//callback
    console.log(output);
};
function displayDOM(output){//callback
    document.getElementById("myLabel").innerHTML = output;
};

