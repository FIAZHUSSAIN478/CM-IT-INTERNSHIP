// jab inner function outer funtion k value ly 

function first(){
    let name="fiaz"
    return function second(){
        console.log(name)
    }
}

const third=first();

third();


// practice example


function bankAccount(){
    let balance=1000;
    return{
        deposite(amount){
            balance+= amount;
            console.log(balance)
        },
        withdraw(amount){
            balance-= amount;
            console.log(balance)

        }
    };
}
let account=bankAccount();
account.deposite(500);
account.withdraw(200);
