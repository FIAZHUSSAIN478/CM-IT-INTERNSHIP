// spreed operator 


let arr=[1,2,3,4];
let arr2=[4,5,6,7]


const arr3=[...arr,...arr2]

console.log(arr3);



// object 
const object1=[{
    name:"fiaz",
    age:24,
    email:"fiaz@gmail.com"
}]
const object2=[{
    name:"ali",
    age:22,
    email:"ali@gmail.com"
}]

const object3=[...object1,...object2]


console.log(object3);


function sum(a,b,c){
return a + b + c;
}
let result=[10,20,20];

console.log(sum(...result))

