// simple call back function


function username(name, callback1){
    callback1();
}

function Details(){
    console.log(`
        fiaz hussain \n
        Pakistani \n
        `)
}

username("Fiaz", Details);