// forenhite formula
// F=(c*9/5)+32
//convert celcius in fahrenhite

let celcius=20;
let fahrenheit=(celcius*9/5)+32; // for convert fahrenheit
console.log(fahrenheit);



//convert clecius in fahrenhite using cli

const readline=require("readline"); 
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter the temperature:",(celcius)=>{
    celcius=Number(celcius);
    let fahrenheit=(celcius*9/5)+32;
    console.log(fahrenheit);
  rl.close();
})

