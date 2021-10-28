const commands = ['new', 'done', 'delete', 'list', 'help'];
const tasksFileName = "tasks.json";
const fs = require('fs');
const prompt = require('prompt');
const chalk = require('chalk');
class TaskManager {
    tasks = [];
    constructor() {
        this.init();
    }

    init() {
        let tasksFile = this.getOrCreateTasksFile();
        this.tasks = JSON.parse(tasksFile);
    };

    getOrCreateTasksFile() {
        if (!fs.existsSync(tasksFileName)) {
            fs.writeFileSync(tasksFileName, JSON.stringify([]));
        }
        return fs.readFileSync(tasksFileName, 'utf-8');
    };

    createNewTask() {
        prompt.start();
        prompt.get(['task'], (err, result) => {
            let task = {
                title: result.task,
                timestamp: new Date().getTime(),
                done: false,
            };
            this.tasks.push(task);
            this.updateTasksFile();
        });
    }

    updateTasksFile() {
        fs.writeFile(tasksFileName, JSON.stringify(this.tasks), function (err) {
            if (!err) {
                console.log('file updated');
            }
        });
    }

    printTasks() {
        this.tasks.map(
            (task, index) => {
                if (task.done) {
                    console.log(chalk.dim.greenBright(chalk.bold(' (x) ') + index + ' - ' + task.title));
                } else {
                    console.log(chalk.bgHex("#3d5a80").white(chalk.bgHex("#3d5a80").white.bold(' ( ) ' + index) + ' - ' + task.title));
                }
            }
        );
    }

    deleteTask(taskIndex) {
        // this.tasks = this.tasks.splice(taskIndex, 1);
        this.tasks.splice(taskIndex, 1);
        this.updateTasksFile();
    }
    setDone(taskIndex) {
        this.tasks[taskIndex].done = true;
        this.updateTasksFile();
    }

    help() {
        console.log(chalk.bgGray('new'), chalk.bgGray('delete'), chalk.bgGray("list"), chalk.bgGray("done"));
    }
};

module.exports = {
    commands,
    TaskManager
};
