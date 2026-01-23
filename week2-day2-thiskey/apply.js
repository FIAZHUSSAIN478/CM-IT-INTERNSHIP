// simple call function 


// function getname(){
//     console.log(this.name +" "+ this.lastname)
// }

// let person={
//     name:"fiaz",
//     lastname:"hussain"
// }

// getname.call(person);



/// appy function 

function userName(country,country1,country2){
    console.log(this.firstname + " " + this.LastName +" "+ country + " " + country1 + " " + country2  )
}

let userdetail={
    firstname:"ali",
    LastName:"husnain"
}

let userarr=["pakistan", "australia","america"];
userName.apply(userdetail,userarr );