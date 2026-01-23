//Creates a new array by applying a function to each element of the original array
// map in an arrays


let array1 = ["fiaz", "ali", "jawad", "jameel"]
let array2 = [3, 4, 5, 1, 6, 7, 9]

const result = array1.map((context) => {

    return context;
})
console.log(result);


//example2


const result2 = array2.map((context) => {
    return context * 2;

})
console.log(result2);



function double(){
    const double1=array2.map((context)=>{
        return context*2;
    })
    console.log(double1);
}

double();

function uppercase(){
    const upper=array1.map((upp)=>{
     return upp.toLocaleUpperCase();
    })
    console.log(upper);
}

uppercase();