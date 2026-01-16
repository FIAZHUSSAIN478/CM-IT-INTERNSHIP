
//mini project assesment to make a todos app cli based using if else conditions 


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];  // declear an empty array to store the task that we add in todo app

function showMenu() {  // here make a function that show menu todo app and handle user options
     

    // dispaly menu option
    console.log("\n === To Do List Menu ===");
    console.log("1. addTask ");  
    console.log("2. listTask");
    console.log("3. deleteTask");
    console.log("4. Exit");

    rl.question("please choose an option (1-4)", (option) => {

        option = Number(option)  // here use number to convert string in number  


        //option 1 is used to add task
        if (operation === 1) {  
            rl.question("enter task you want to add:", (task) => {
                todos.push({ task: task });
                console.log(`task ${task} added successfully`);
                showMenu();
            });
        }


        //option 2 is used to list task mean k shoe all task that we add
        else if (option === 2) {
            todos.forEach((tassk) => {
                console.log(`${tassk.task}`);
            })

            showMenu();
        }


        //option 3 is used to delete task 
        else if (option === 3) {
            rl.question("choose number which task you want to delete: ", (number) => {
                const index = Number(number) - 1
                if (todos[index]) {
                    const removed = todos.splice(index, 1);
                    console.log(`Deleted task: ${removed[0].task}`);
                } else {
                    console.log("invalid task");
                }
                showMenu();
            })
        }


        // optionn 4 is used to close tha app
        else if (option === 4) {
            console.log("goodbyee");
            rl.close();
        }
    });
}

showMenu(); 
