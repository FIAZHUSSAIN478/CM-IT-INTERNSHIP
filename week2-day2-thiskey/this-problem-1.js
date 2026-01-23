// fixed this key word inside settimeout 


const user={
    name:"Fiaz",
    age:25,
    display:function(){
      return `My name is: ${this.name} && age: ${this.age}`
    }
}
setTimeout(() => {
    console.log(user.display());
}, 1000);