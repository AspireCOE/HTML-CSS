var tasks = [];
var nextId = 1;
function addTask() {
    var inputElement = document.getElementById('todo-input');
    var newTaskContent = inputElement.value.trim();
    if (newTaskContent) {
        var newTask = { id: nextId++, content: newTaskContent };
        tasks.push(newTask);
        updateTaskList();
        inputElement.value = ''; // Clear input after adding
        inputElement.focus();
    }
}
function updateTaskList() {
    var listElement = document.getElementById('todo-list');
    listElement.innerHTML = ''; // Clear existing tasks in the list
    var _loop_1 = function (task) {
        var listItem = document.createElement('li');
        listItem.textContent = task.content;
        listItem.onclick = function () { removeTask(task.id); };
        listElement.appendChild(listItem);
    };
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        _loop_1(task);
    }
}
function removeTask(taskId) {
    var taskIndex = tasks.findIndex(function (task) { return task.id === taskId; });
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1); // Remove the task
        updateTaskList(); // Update the list
    }
}
