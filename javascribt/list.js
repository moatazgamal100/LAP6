function createTask(taskText) {
    const span = document.createElement('span');
    span.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.onclick = function() 
    {
        span.style.color = (span.style.color === 'green') ? '' : 'green';
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        const li = this.parentElement;
        li.parentElement.removeChild(li);
    };

    const li = document.createElement('li');
    li.appendChild(span);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    return li;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = createTask(taskInput.value);
    taskList.appendChild(li);
    taskInput.value = '';
}
