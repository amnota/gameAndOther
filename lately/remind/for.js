let prices = [5, 10, 15, 20];

console.log(prices.length);
for(let i = 0; i < prices.length ; i +=1){//create a counter  
    console.log(prices[i])
} 
/*for(expresion1, expression2, expression3) 
   let i = 0; ให้ i เริ่มที่ 0
   i < price.length ; ถ้า i ยัง < price.length(4) ให้ loop ต่อไป 
   i +=1 และทุกครั้ง +1 
   console.log(price[i]) duriinf each iteration display element  */

for(let i = prices.length -1; i>=0; i-=1){
    console.log(prices[i])
}
/*
let i = price.length -1 เพราะ index มันเริ่มที่ 0 จะ< price lenght 1 
i>=0 ถ้า i ยังมากกว่า0 iterate ต่อไป i-=1 ทุกครั้งที่ iterate ให้ i-1*/

for(let price of prices){
    console.log(price)
}

/* 1st     i<price.lengh                action
  i=0          true              ARR of prices is print
                                    i +1 =1 
  i=1           -                ARR of prices is print
                                    i +1 =2
  i=2           -                ARR of prices is print
                                    i +1 =3          
  i=3           -                ARR of prices is print
                                    i +1 =4       
  i=4          false               loop terminate            */