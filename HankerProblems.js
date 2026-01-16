
// problem to fined  the longest word in a string ("this is my first problem")

function longestWord(sentence){
    let words =sentence.split(" ");
    let longest="";
    for(let word of words){
        if(word.length>longest.length){
            longest=word;
        }
    }
    return longest;
}
console.log(longestWord("this is my first problem"));



//Given an array of integers, calculate the ratios of its elements that are , , and . Print the decimal value of each fraction on a new line with 6 places after the decimal.


function plusMinus(arr){
    const num=arr.length;
    let positive=0;
    let negative=0;
    let zero=0;

    for (let i=0; i<num; i++){
        if(arr[i] > 0){
        positive++;
        }
        else if(arr[i]<0){
            negative++;
        }
        else{
            zero++;
        }
    }

console.log((positive/num).toFixed(6));
console.log((negative/num).toFixed(6));
console.log((zero/num).toFixed(6));
}
plusMinus([5,,6,7,-8,-9]);


// simple object
let obj={
    ht:180,
    age:25,
    wt:39
}
console.log(obj);
obj.color="white";
console.log(obj);

//  shallow copy
let obj={
    name:"fiaz",
    adress:{
        city:"lahore "
    }
}

const obj2={...obj}
obj2.name="ali"
obj2.adress.city="karachii"

console.log(obj2);

// deep copy
let obj={
    name:"fiaz",
    adress:{
        city:"lahore "
    }
}
const obj3=JSON.parse(JSON.stringify(obj));
obj3.name="jawad";
obj3.adress.city="karachi";
console.log(obj3);
