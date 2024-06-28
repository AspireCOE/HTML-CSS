class Task {
  public task_id: number;
  public title: string;
  public description: string;
  public dueDate: Date;
  public isComplete: boolean;

  constructor(taskInfo: {
    task_id: number;
    title: string;
    description: string;
    dueDate: Date;
  }) {
    this.task_id = taskInfo.task_id;
    this.title = taskInfo.title;
    this.description = taskInfo.description;
    this.dueDate = taskInfo.dueDate;
    this.isComplete = false;
  }

  public Complete() {
    this.isComplete = true;
  }

  public inComplete() {
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
