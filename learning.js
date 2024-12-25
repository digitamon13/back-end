//

//Challenge 1: Print Numbers from 1 to 100

/*for( let i = 1; i <= 100;i++){
    if(odd){
        cons....
    }
}
*/



//Challenge 2: Print Odd Numbers Less Than 100


///Challenge 3: Print Multiplication Table with 7



//Challenge 4: Print All Multiplication Tables (1 to 10)

let counter = 1
let timetable = 1
for(let i = 1; i<=120; i++){
   
    if(counter === 12){
        counter = 0
        timetable++
    }
    counter++
   // console.log(counter * timetable)

}

//Challenge 16: Check if a number is prime

/*
prime nume are numbers that can only be divided by itself and 1

*/


let numberChecker = (num)=>{
    if(num%2 !== 0 && num % 3 !== 0 && num % 4 !== 0 &&  num % 5!== 0 && num % 6!== 0 && num % 7!== 0 && num % 8 && num % 9){
        console.log('its a prime number')
    }else{
        console.log('its not a prime number')
        
    }

}




numberChecker(48)