let tasks = [];
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const taskList = document.getElementById('taskList');

function renderTasks() {
    
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

function addTask() {
    const newTask = taskInput.value.trim(); 

    if (newTask === '') {
        alert('Task cannot be empty!'); 
        return;
    }

    tasks.push(newTask);
    taskInput.value = ''; 
    renderTasks(); 
}

function clearAllTasks() {
    tasks = [];
    renderTasks(); 
}

addTaskBtn.addEventListener('click', addTask);
clearAllBtn.addEventListener('click', clearAllTasks);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
