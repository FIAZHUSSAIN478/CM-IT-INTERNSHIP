
// simple tip calculator basic 

let Bill=3000;
let interest=0.10;
let Tip=Bill*interest;
console.log(Tip);


// tip calculator by using cli 
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("enter the total bill:", (num1) => {
    let interest = 0.10;
    num1 = Number(num1);
    let result = interest * num1
    let percentage=result/num1*100
    console.log(result);
    console.log(percentage);
    rl.close();
});

