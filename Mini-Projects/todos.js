
//todos list mini project by using cli and switch 
//make functions for addtask, listtask, deletetask and exit the app

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];   // that is use to store task which we add to list.

function showMenu() {      // make a function that show app
    console.log("\n=== to do list menu===");
    console.log("1. Add Task");
    console.log("2. List Task");
    console.log("3. Delete Task");
    console.log("4. Exit");

    rl.question("choose an option (1-4):", (choice) => {

        switch (choice) {   // use switch operator for addtask,listtask,deletetask and exit the to do app
            case "1":
                addTask();  // case.1 show the function where we add a task in todo app
                break;
            case "2":
                listTask();  // case2. show the function which show the list of task that added in todo app
                break;
            case "3":
                deleteTask(); //case3. show the function in delete function delete task which slect number by user
                break;
            case "4":
                console.log("Goodbye");   // function to close the todo app and show goodbyee
                rl.close();
                break;
            default:
                console.log("invalid task");  //if we not slect any case that show invalid task 
                showMenu();
        }
    });
}

// here make a function addTask() that is add a task in todo app which we want to add.
function addTask() {
    rl.question("enter task which you want to add:", (task) => {
        todos.push({ text: task, done: false });
        console.log(`task " ${task} "added`);
        showMenu();
    });
}

// here make a function  that is show task in list 
//if task length is 0 it show no task yet.
function listTask() {
    if (todos.length === 0) {
        console.log("no task yet");
    } else {
        todos.forEach((task, index) => {
            console.log(`${index + 1}.[${task.done ? "" : ""}]${task.text}`);
        });
    }
    showMenu();
}


// make a delete function that delet task from app which number is slect
//if slected number is 0 it show no task deleted yed 
function deleteTask() {
    if (todos.length === 0) {
        console.log("no task deleted yet");
        showMenu();
        return;
    }
    rl.question("enter task number you want to delete:", (num) => {
        const index = Number(num) - 1
        if (todos[index]) {
            const removed = todos.splice(index, 1);
            console.log(`task " ${removed[0].text} " deleted`);
        }
        else {
            console.log("invalid task");
        }
        showMenu();
    });
}
console.log("well come to do list app");
showMenu();
