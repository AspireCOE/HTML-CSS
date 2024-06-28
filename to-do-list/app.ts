type Task ={
    id: number;
    content: string;
};

const tasks:Task[] =[];
let nextId = 1;

function addTask():void{
    const inputElement:HTMLInputElement = document.getElementById('todo-input') as HTMLInputElement;
    const newTaskContent:string = inputElement.value.trim();
    if (newTaskContent){
        const newTask:Task ={ id: nextId++, content: newTaskContent };
        tasks.push(newTask);
        updateTaskList();
        inputElement.value =''; // Clear input after adding
        inputElement.focus();
    }
}

function updateTaskList():void{
    const listElement:HTMLElement =document.getElementById('todo-list');
    listElement.innerHTML=''; // Clear existing tasks in the list

    for (const task of tasks){
        const listItem =document.createElement('li');
        listItem.textContent =task.content;
        listItem.onclick =() =>{ removeTask(task.id); };
        listElement.appendChild(listItem);
    }
}

function removeTask(taskId:number):void{
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex>-1){
        tasks.splice(taskIndex,1); // Remove the task
        updateTaskList(); // Update the list
    }
}
