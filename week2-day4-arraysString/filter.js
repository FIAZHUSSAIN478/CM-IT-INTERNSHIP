// filter 
//The filter() method creates a new array containing elements that satisfy a specified condition.




let array=[5,50,40,30,70,53,31,35,47,2,5]
const result=array.filter(arr=>arr%2===0);
console.log(result);


let users=[
    {name:"Fiaz" , age:25},
    {name:"Muzzamal", age:22},
    {name:"Jawad", age:21},
    {name:"Faisal", age:19},
    {name:"Usman", age:15},
    {name:"Yousaf", age: 27}
]

const adults=users.filter(user=>user.age>=18);
console.log(adults);

