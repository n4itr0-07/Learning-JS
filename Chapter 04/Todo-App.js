let todo =[];

let req = prompt("What would you like to do?");
while(true) {
    if (req == "quit") {
        console.log("Ok, you quit the app!");
        break;
    } 
    if (req == "list") {
        console.log("**********");
        for (task of todo) {
            console.log(`${todo.indexOf(task)}: ${task}`);
        }
        console.log("**********");
    } else if (req == "add") {
        let newTask = prompt("Enter new task:");
        todo.push(newTask);
        console.log(`Task added: ${newTask}`);
    } else if (req == "delete") {
        let index = parseInt(prompt("Enter index of task to delete:"));
        if (!Number.isNaN(index)) {
            let deleted = todo.splice(index, 1);
            console.log(`Deleted task: ${deleted}`);
        } else {
            console.log("Invalid index!");
        }
    } else {
        console.log("Invalid request!");
    }
    req = prompt("What would you like to do?");

    
}