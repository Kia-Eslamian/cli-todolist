const commands = require('./TaskManager').commands;
let command = process.argv[2];
const TaskManager = require('./TaskManager').TaskManager;
const chalk = require('chalk');

if (commands.indexOf(command) == -1) {
    console.log(chalk.red("Command is not valid"));
}

let taskManagerApp = new TaskManager;
// console.log(taskManagerApp);

let taskIndex = process.argv[3];
switch (command) {
    case 'new':
        taskManagerApp.createNewTask();
        break;

    case 'delete':
        taskIndex = process.argv[3];
        taskManagerApp.deleteTask(taskIndex);
        break;

    case 'done':
        taskIndex = process.argv[3];
        taskManagerApp.setDone(taskIndex);
        taskManagerApp.printTasks();
        break;

    case 'list':
        taskManagerApp.printTasks();
        break;

    case 'help':
        taskManagerApp.help();
        break;

    default:
        break;
}