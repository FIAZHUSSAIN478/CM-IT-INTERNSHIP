// Swap	two	strings	without	temp varl;


let a= "Hi";
let b="Bye"

console.log(a,b);
a=a+b;
console.log(a,b);

console.log(a.slice(0,2));

b=a.slice(0,a.length-b.length); // 2 reh gya
console.log("i am b: "+b);
console.log("is am a:" +a);
a=a.slice(b.length);
console.log(a);




//using destructuring

let str1 = "Hello";
let str2 = "Fiaz Hussain";

[str1,str2] = [str2,str1];

console.log("str1:",str1);
console.log("str2:",str2);


