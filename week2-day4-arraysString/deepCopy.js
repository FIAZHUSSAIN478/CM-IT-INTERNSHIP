// let user={
//     name:"Fiaz",
//     adress:{
//         city:"Minchinabad",
//         country:{
//             count:"pakistan"
//         }
//     }
// }
// const object1=JSON.parse(JSON.stringify(user));
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

let user2=JSON.parse(JSON.stringify(user));

user2.adress.city="karachi";

console.log(user2)
console.log(user)