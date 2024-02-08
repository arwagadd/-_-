function addTask() {

    const textInput = document.getElementById('taskInput');
    const taskContainer = document.getElementById('taskContainer');

    if (textInput.value.trim() !== '') {
        const currentTime = new Date().toLocaleTimeString();

        const taskElement = document.createElement('div');
        taskElement.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.transform = 'scale(1.9)'

        const taskText = document.createElement('span');
        taskText.textContent = ` ${textInput.value} - ${currentTime}  `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.color = 'white';
        deleteButton.style.padding = '5px 6px';
        deleteButton.style.margin = '1%';
        deleteButton.style.border = '1px solid black';  // Set border to none
        deleteButton.addEventListener('click', function (){
            taskContainer.removeChild(taskElement);
        })

        // Append the checkbox and task text to the task element
        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteButton);

        // Append the task element to the task container
        taskContainer.appendChild(taskElement);

        // Clear the input field after adding the task
        textInput.value = '';
    }
}
