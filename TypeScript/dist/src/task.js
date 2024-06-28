"use strict";
class Task {
    constructor(taskInfo) {
        this.task_id = taskInfo.task_id;
        this.title = taskInfo.title;
        this.description = taskInfo.description;
        this.dueDate = taskInfo.dueDate;
        this.isComplete = false;
    }
    Complete() {
        this.isComplete = true;
    }
    inComplete() {
        this.isComplete = false;
    }
}
const task1 = new Task({
    task_id: 1,
    title: "Sql Assignment",
    description: "Write the query statement for all qns",
    dueDate: new Date("2024-06-27"),
});
task1.Complete();
console.log(task1);
