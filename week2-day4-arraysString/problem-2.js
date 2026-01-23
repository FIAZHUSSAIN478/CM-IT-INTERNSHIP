// finddublicate character in a string
// function findDuplicate(){
//     let str="programinng";
//     let chars=str.split('');
//     let countChar=chars.reduce(function(acc,curr){
//         if(acc[curr]){
//             acc[curr]=acc[curr]+1
//         }else{
//           acc[curr]=1
//         }
//         return acc;
//     },{})     
//     console.log(countChar);

//     let dublicate = Object.keys(countChar).filter(function(key,index){
//         console.log(key,index);
//         return countChar[key]>1;
//     })
//     console.log(dublicate);
// }
// findDuplicate();



function findDuplicate(){
    let str="gbcjshcbhbqhf";
    let chars=str.split('');
    let countchar=chars.reduce(function(acc,curr){

        if(acc[curr]){
            acc[curr]=acc[curr]+1
        }
        else{
            acc[curr]=1
        }
        return acc;

    },{})
    console.log(countchar);


    let dublicate= Object.keys(countchar).filter(function(key, index){
     console.log(key,index);
     return countchar[key]>1;
    })
    console.log(dublicate);

}
findDuplicate();

    