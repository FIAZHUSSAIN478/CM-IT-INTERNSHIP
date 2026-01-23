// week 1 day 1 problem-2 is that 
// Counter	using	closure	(increment) 


function outer() {
    let count = 0;
    return function inner() {

        count++;

        console.log(count);
    }
}
const counter = outer();
counter();
counter();
counter();
counter();
counter();
