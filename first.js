// let a=10;
// let b=20;
// sum=a+b
// console.log(sum)

// function add(a,b){
//     return a+b;
// }
// console.log(add(25,30))

// function greet(name){
//     console.log("Hello "+name)
// }
// greet("Fiaz")


//map 
// const numbers = [1,2,3,4];
// const doubled = numbers.map(n => n * 2)
// console.log(doubled);

// const names=['ali','fiaz','jawad','usman']
// const uperNames=names.map(name => name.toUpperCase())
// console.log(uperNames)

// const prices=[1000,2000,3000,4000]
// const priceWithTax=prices.map(p=>p+p*0.15)
// console.log(priceWithTax)

// const users=[{name:'ali',email:'ali2test.com'},{name:'fiaz',email:'fiaz@test.com'}]
// const emails=users.map(user=>user.email)
// console.log(emails)

//filter

// const numbers=[10,8,50,110,200]
// const filtered=numbers.filter(n=>n >10)
// console.log(filtered)

// const users = [{ name: 'ali', active:true },
// { name: 'fiaz', active:false }];
// const activeUsers = users.filter(user => user.active);
// console.log(activeUsers);

// const words=["Apple","Banana","Avocado","Grapes"];
// const awords=words.filter(word=>word.startsWith('A'));
// console.log(awords);

// const users=[{name:"Ali", age:17}, {name:"Sara", age:20}]
// const filteredUsers=users.filter(user=>user.age>18)
// console.log(filteredUsers)

//reducer
// const numbers=[2,3,5,7,9,6];
// const sum=numbers.reduce((acc,curr)=>acc+curr,0)
// console.log(sum)

// const numbers=[1,2,3,4];
// const sum=numbers.reduce((acc,curr)=>acc+curr,0)
// console.log(sum)

// const numbers=[2,3,9,6];
// const sum=numbers.reduce((acc,curr)=>acc*curr,1)
// console.log(sum)
// const prices=[1000,2000,3000];
// const total=prices.reduce((sum , price)=>sum+price,0)
// console.log(total);

//arrow function
// function add(a,b){
//     return a+b;
// }

// const add=(a,b) => a+b;
// console.log(add(2,3))


//hanker rank problems
// function totalPrice(products) {
//   try {
//     if (!products || products.length === 0) {
//       throw "Invalid data";
//     }
//     products.forEach(p => {
//       if (typeof p.price !== "number") {
//         throw "Invalid data";
//       }
//     });
//     const pricesWithTax = products.map(p => p.price + p.price * 0.10);
//     const total = pricesWithTax.reduce((acc, curr) => acc + curr, 0);

//     return total;

//   } catch (error) {
//     return error;
//   }
// }
// const products1 = [
//   {name: "A", price: 100},
//   {name: "B", price: 200}
// ];
// const products2 = [];
// const products3 = [
//   {name: "C", price: "300"}
// ];
// console.log(totalPrice(products1));
// console.log(totalPrice(products2));
// console.log(totalPrice(products3));


