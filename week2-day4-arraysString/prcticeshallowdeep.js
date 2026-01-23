// let obj4 = {
//     name: "pheonix",
//     address:{
//         city:"LHE",
//         street:4
//     }
// }

// let user4 = {...obj4};
// user4.address.city = "KHI"

// console.log(obj4.address.city);
// //returns KHI ...problem


// let obj5 = {
//     name: "pheonix",
//     address:{
//         city:"LHE",
//         street:4
//     },
 
// }

// let user5 = JSON.parse(JSON.stringify(obj5));
// user5.address.city = "KHI"

// console.log(obj5.address.city);




let user ={
    name:"ali",
    adress:{
      city:"lahore"
    }
}

let user1=JSON.parse(JSON.stringify(user))
user1.adress.city="karachi"

console.log(user1);
console.log(user);
