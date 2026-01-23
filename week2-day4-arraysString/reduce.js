//reduce() method is a powerful built-in array function that executes a user-supplied "reducer" callback function on each element of an array, resulting in a single output value.

let array1=[3,4,5,7,7,8]
const muliplication=array1.reduce((acc,curr)=>acc+curr*7,0);
console.log(muliplication);

function multipl(){
    let array2=[5,7,8,9,5];
    const multiple=array2.reduce((acc,curr)=>(acc+curr)*2);
    console.log(multiple);
}
multipl();

function first(){
   let firstarray=[3,4,5,6,7,6];
   const result=firstarray.reduce((acc,curr)=>acc+curr,0)
   console.log(result);
}
first();