const commands = require('./TaskManager').commands;
let command = process.argv[2];
const TaskManager = require('./TaskManager').TaskManager;
const chalk = require('chalk');

if (commands.indexOf(command) == -1) {
    console.log(chalk.red("Command is not valid"));
}

let taskManagerApp = new TaskManager;

switch (command) {
    case 'new':

        break;

    case 'done':

        break;

    case 'delete':

        break;

    case 'list':

        break;

    default:
        break;
}