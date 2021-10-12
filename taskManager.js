const commands = ['new', 'done', 'delete', 'list'];
const tasksFileName = "tasks.json";
const fs = require('fs');

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

    createNewTasks() {
        // 34:43 
    }
    doneTask() { }
    deleteTask() { }
    listAllTasks() { }
};

module.exports = {
    commands,
    TaskManager
};