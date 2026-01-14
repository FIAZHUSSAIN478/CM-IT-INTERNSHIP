// let Bill=3000;
// let interest=0.10;
// let Tip=Bill*interest;
// console.log(Tip);


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("enter the total bill:", (num1) => {
    let interest = 0.10;
    num1 = Number(num1);
    let result = interest * num1
    console.log(result);
    rl.close();
});

