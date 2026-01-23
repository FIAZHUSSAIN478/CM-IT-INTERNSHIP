function greetings(city){
    console.log(`${this.firstNmae} ${this.lastName}`);
    console.log(city);
}

const person={
    firstNmae:"Fiaz",
    lastName:"Hussain"
}

const greetingsBind=greetings.bind(person);
greetingsBind("Lahore");

Function.prototype.myBind=function(context, ...args1){
    const self=this;
    return function(...args2){
       self.apply(context, [...args1, ...args2]);
    }
}
const greetingsmyBind=greetings.myBind(person)
greetingsmyBind("Karachi");