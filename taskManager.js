const commands = ['new', 'done', 'delete', 'list'];
const tasksFileName = "tasks.json";
const fs = require('fs');
const prompt = require('prompt');
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
    deleteTask() { }
    listAllTasks() { }
};

module.exports = {
    commands,
    TaskManager
};