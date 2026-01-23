
// bind function   
function getname(city, country){
    console.log(this.Fname + " " + this.Lname + " " + city + " " + country);
}

let detail={
    Fname:"fiaz",
    Lname:"hussain"
}
const getBind=getname.bind(detail)
getBind("Lahore", "pakistan");



const person={
    firstname:"ali",
    lastname:"jawad",
    getName:function(){
        console.log(this.firstname + " " + this.lastname)
    }
}
let person2={
    firstname:"ali",
    lastname:"hussnain"
}
person.getName.call(person2);