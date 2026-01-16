

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
console.log(longestWord("this is my first problem"))