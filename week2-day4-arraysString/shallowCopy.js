//shallow copy 
// shallow copy object ki bs intaial value ko copy krta hai nested object ko copy nhi krta 

// let user={
//     name:"Fiaz",
//     adress:{
//         city:"Minchinabad",
//         country:{
//             count:"pakistan"
//         }
//     }
// }
// const object1={...user};
// object1.name="ali"  //  ye intail value tu kr lii
// object1.adress.city="lahore"
// object1.adress.country="india"

// console.log(object1);




let user={
    name:"ali",
    adress:{
        city:"lahore"
    }
}

let user1={...user};

user1.name="faiz"
user1.adress.city="karachi"

console.log(user1);
console.log(user);


