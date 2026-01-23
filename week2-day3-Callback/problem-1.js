// convert call back function to promise


function getdata(callback){
    setTimeout(()=>{
        callback();
    },2000)
}


function data(){
   console.log("data recieve")
}

getdata(data);



// promise based function 

function LoadData(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("data reived successfully")
       },3000)
    })
}
LoadData().then((data)=>{
    console.log(data)
})