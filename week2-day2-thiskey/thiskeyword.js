//   this key word in object  
// const user ={
//     username:"ali",
//     age:25,
//     welcomemessage:function(){
//         console.log(`${this.username} , wellcome to website`)
//         console.log(this);
//     }
// }
// user.welcomemessage();
// user.username="fiaz";
// user.welcomemessage()


// console.log(this);

 
// this keyword on simple function
// function user(){
//     let username="ali"
//     console.log(this.username);
// }
// user();


// const user= function user(){
//     let username="ali"
//     console.log(this.username);
// }
// user();


// this key word in arrow function


const user = () => {
    let username="ali"
    console.log(this.username);
}
user();