
// // call backe function

// function user(name, hello){
//     console.log("Hello" +" " + name)
//     hello(firstname("Fiaz",Lastname));
// }
// function firstname(name,lastname){
//     console.log(`my first name is that : ${name}` )
//     lastname("Hussain", City);
// }
// function Lastname(Lname, city){
//     console.log(`last name is that: ${Lname}`)
//     city(district());

// }
// function City(){
//     console.log("my city is: Minchinabad")
// }
// function district(){
//     console.log("my district is: Bahawalnagar")
// }

// function bye(){
//     console.log("goodbyee");
// }

// user("Fiaz",bye);



function ali(fistname, hello) {
    console.log(`fistname is ${fistname}`);
    hello(ali2("hussain",City));
}

function ali2(lastName, city){
    console.log(lastName);
    city(ali3(countary));
}
function City(){
console.log("my city is lahore");
}

function ali3(countary){
countary();
}

function countary(){
console.log("my countary is Pakistan");
}

function goodbye() {
    console.log("goodbyeee best of luch")
}

ali("fiaz", goodbye);