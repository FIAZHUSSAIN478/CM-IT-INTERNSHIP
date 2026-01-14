// forenhite formula
// F=(c*9/5)+32

// let c=20;
// let f=(c*9/5)+32; // for convert fahrenheit
// console.log(f);

// const readline=require("readline"); // covert in CLI
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.question("enter the temperature:",(c)=>{
//     c=Number(c);
//     let f=(c*9/5)+32;
//     console.log(f);
//   rl.close();
// })








// let f=30;
// let c=(f-32)*5/9;  // for convert celsius
// console.log(c)

// convert f in c through CLI

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter the fahrenheit:",(f)=>{
    f=Number(f);
    let c=f-32*5/9;
    console.log(`celsius is: ${c}`)
    rl.close();
});

