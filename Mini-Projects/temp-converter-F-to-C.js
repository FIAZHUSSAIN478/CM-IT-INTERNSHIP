// simple basic convert fahrenhite in celcius

let fahrenheit=30;
let celcius=(fahrenheit-32)*5/9;  
console.log(celcius)






// temperature converter using cli

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter the fahrenheit:",(fahrenheit)=>{
    fahrenheit=Number(fahrenheit);
    let celcius=fahrenheit-32*5/9;
    console.log(`celsius is: ${celcius}`)
    rl.close();
});
