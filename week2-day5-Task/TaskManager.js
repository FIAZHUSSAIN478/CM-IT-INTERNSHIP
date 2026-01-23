// task manager
//Add,	delete	and	complete	tasks
//Filter tasks	(pending/completed)



const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let tasks = [];   /// make an array that use to store data
function taskManager() {
    console.log("\n--- Welcome To Task Manager ---\n")
    showMenu();
}
function showMenu() {
    console.log("1: Add Task");
    console.log("2: View All Tasks");
    console.log("3: Delete Task");
    console.log("4: Mark Task completed");
    console.log("5: ViewCompleted")
    console.log("6: ViewPending");

    rl.question("Choose option: (1-6): ", function (option) {
        option = parseInt(option)
        if (option === 1) {
            add();
        }
        if (option == 2) {
            viewTask()
            showMenu();
        }
        if (option == 3) {
            deleteTask();
            showMenu();
        }
        if (option == 4) {
            completeTask();
            showMenu();
        }
        if (option == 5) {
            ViewCompleted();
        }
        if (option == 6) {
            ViewPending();
        }


    });

    function add() {   // add task function 
        rl.question("enter task which you want to add :", function (taskName) {
            let object = {
                id: Date.now(),
                name: taskName,
                completed: false
            }
            tasks.push(object)
            showMenu();
        })
    }
    function viewTask() {     // task detail view funtion
        if (tasks.length == 0) {
            console.log("no task yet")
        }
        else {
            console.log(" -- all task are tha --");
            for (let i = 0; i < tasks.length; i++) {
                console.log(tasks[i].id, tasks[i].name);
            }

        }
    }
    function deleteTask() {   // delete function
        if (tasks.length == 0) {
            console.log("no task is deleted");
            showMenu();
        }
        else {
            rl.question("enter task number that be deleted : ", function (ind) {
                let delIndex = parseInt(ind);
                let remove = tasks.splice(delIndex, 1);
                showMenu();
            })
        }
    }

    function completeTask() {   // complete to a task mark as completed by default are task pending
        if (tasks.length == 0) {
            console.log("np task is to be completed");
            showMenu();
        }
        console.log("\n--- completed task ---\n");

        for (let i = 0; i < tasks.length; i++) {
            let status = tasks[i].completed ? "[completed]" : "[pending]";
            console.log(`${i + 1}.{${tasks[i].name},${status}`)
        }
        rl.question("enter number that mark as completed : ", function (i) {
            i = parseInt(i) - 1;
            if (tasks[i] && !tasks[i].completed) {
                tasks[i].completed = true;
                console.log("\n Completed: " + tasks[i].name);
            }
            else {
                console.log("Invalid task number or already completed!");
            }
            showMenu();
        })

    }

    function ViewCompleted() {   /// view function of completed task
        let completed = tasks.filter(task => task.completed)
        if (completed.length == 0) {
            console.log("no task is completed")
            showMenu();
            return;
        }
        console.log("---- completed task are these----")

        completed.forEach((task, i) => {
            console.log(`${i + 1}. ${task.name}`)
        })
        showMenu();
    }

    function ViewPending() {   // show pending task in array
        let pending = tasks.filter(tasks => !tasks.completed)
        if (pending.length == 0) {
            console.log("no pending task");
            showMenu();
            return;
        }
        console.log("--- pending are these");

        pending.forEach((tasks, j) => {
            console.log(`${j + 1}.${tasks.name}`)
        });
        showMenu();
    }


}

taskManager(); 
