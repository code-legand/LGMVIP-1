// Get the modal element
const modal = document.getElementById('add-task-modal');

// Get the button that triggers the modal
const modalToggleButton = document.querySelector('[data-modal-toggle="add-task-modal"]');

// Get the button that hides the modal
const modalHideButton = document.querySelector('[data-modal-hide="add-task-modal"]');

// Function to show the modal
const showModal = () => {
  modal.classList.add('flex');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

// Function to hide the modal
const hideModal = () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
};

// Event listener for the modal toggle button
modalToggleButton.addEventListener('click', () => {
  showModal();
});

// Event listener for the modal hide button
modalHideButton.addEventListener('click', () => {
  hideModal();
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

// Close the modal if the user presses the Escape key
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideModal();
  }
});


const newTaskAddButton = document.querySelector('#add-task-button');
newTaskAddButton.addEventListener('click', () => {
    const newTaskName = document.querySelector('#t-name').value;
    const newTaskDescription = document.querySelector('#t-detail').value;
    const newTaskDivision = `<div class="m-3 bg-red-200 border border-gray-200 rounded-lg shadow">
                                <div class="flex flex-col items-center py-4">
                                    <h5 class="mb-1 text-xl font-medium text-gray-900">${newTaskName}</h5>
                                    <span class="text-sm text-gray-500">${newTaskDescription}</span>
                                    <div class="flex mt-4 space-x-3 md:mt-6">
                                        <button data-tooltip-target="tooltip-1" type="button" title="Move to In Progress"
                                            class="move-to-progress-btn text-green-400 bg-white border-2 border-green-400 focus:outline-none hover:bg-green-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">►</button>
                                        <button data-tooltip-target="tooltip-1" type="button" title="Move to Completed"
                                            class="move-to-completed-btn text-gray-400 bg-white border-2 border-gray-400 focus:outline-none hover:bg-gray-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">✔</button>
                                        <button data-tooltip-target="tooltip-1" type="button" title="Delete Task"
                                            class="delete-task-btn text-white bg-red-500 border-2 border-red-400 focus:outline-none hover:bg-red-600 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">▬</button>
                                    </div>
                                </div>
                            </div>`;
    const todoList = document.querySelector('#todo-list');
    todoList.insertAdjacentHTML('beforeend', newTaskDivision);
    document.querySelector('#t-name').value = '';
    document.querySelector('#t-detail').value = '';
    hideModal();
});

let todoTask = document.querySelector('#todo-list');
todoTask.addEventListener('click', (event) => {
    const currentTask = event.target.parentElement.parentElement.parentElement;

    if (event.target.classList.contains('move-to-progress-btn')) {
        var updatedTask = document.querySelector('#progress-list');
        var bgColor = 'green';
        var buttonSection = `<button data-tooltip-target="tooltip-1" type="button" title="Move to ToDo"
                                    class="move-to-todo-btn text-red-400 bg-white border-2 border-red-400 focus:outline-none hover:bg-red-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">◄</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Move to Completed"
                                    class="move-to-completed-btn text-gray-400 bg-white border-2 border-gray-400 focus:outline-none hover:bg-gray-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">✔</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Delete Task"
                                    class="delete-task-btn text-white bg-red-500 border-2 border-red-400 focus:outline-none hover:bg-red-600 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">▬</button>
                                `;
        var move = true;
    }
    else if (event.target.classList.contains('move-to-completed-btn')) {
        var updatedTask = document.querySelector('#completed-list');
        var bgColor = 'slate';
        var buttonSection = `<button data-tooltip-target="tooltip-1" type="button" title="Move to ToDo"
                                    class="move-to-todo-btn text-red-400 bg-white border-2 border-red-400 focus:outline-none hover:bg-red-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">◄</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Move to In Progress"
                                    class="move-to-progress-btn text-green-400 bg-white border-2 border-green-400 focus:outline-none hover:bg-green-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">►</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Delete Task"
                                    class="delete-task-btn text-white bg-red-500 border-2 border-red-400 focus:outline-none hover:bg-red-600 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">▬</button>
                                `;
        var move = true;
    }

    if (move) {
        const taskName = currentTask.querySelector('div').querySelector('h5').textContent;
        const taskDescription = currentTask.querySelector('div').querySelector('span').textContent;
        const newTaskDivision = `<div class="m-3 bg-${bgColor}-200 border border-gray-200 rounded-lg shadow">
                                        <div class="flex flex-col items-center py-4">
                                            <h5 class="mb-1 text-xl font-medium text-gray-900">${taskName}</h5>
                                            <span class="text-sm text-gray-500">${taskDescription}</span>
                                            <div class="flex mt-4 space-x-3 md:mt-6">
                                                ${buttonSection}
                                            </div>
                                        </div>
                                    </div>`;
        console.log(newTaskDivision);
        updatedTask.insertAdjacentHTML('beforeend', newTaskDivision);
        currentTask.remove();
        move = false;
    }

    if (event.target.classList.contains('delete-task-btn')) {
        currentTask.remove();
    }
});

let progressTask = document.querySelector('#progress-list');
progressTask.addEventListener('click', (event) => {
    const currentTask = event.target.parentElement.parentElement.parentElement;

    if (event.target.classList.contains('move-to-todo-btn')) {
        var updatedTask = document.querySelector('#todo-list');
        var bgColor = 'red';
        var buttonSection = `<button data-tooltip-target="tooltip-1" type="button" title="Move to In Progress"
                                    class="move-to-progress-btn text-green-400 bg-white border-2 border-green-400 focus:outline-none hover:bg-green-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">►</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Move to Completed"
                                    class="move-to-completed-btn text-gray-400 bg-white border-2 border-gray-400 focus:outline-none hover:bg-gray-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">✔</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Delete Task"
                                    class="delete-task-btn text-white bg-red-500 border-2 border-red-400 focus:outline-none hover:bg-red-600 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">▬</button>
                                `;
        var move = true;
    }
    else if (event.target.classList.contains('move-to-completed-btn')) {
        var updatedTask = document.querySelector('#completed-list');
        var bgColor = 'slate';
        var buttonSection = `<button data-tooltip-target="tooltip-1" type="button" title="Move to ToDo"
                                    class="move-to-todo-btn text-red-400 bg-white border-2 border-red-400 focus:outline-none hover:bg-red-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">◄</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Move to In Progress"
                                    class="move-to-progress-btn text-green-400 bg-white border-2 border-green-400 focus:outline-none hover:bg-green-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">►</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Delete Task"
                                    class="delete-task-btn text-white bg-red-500 border-2 border-red-400 focus:outline-none hover:bg-red-600 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">▬</button>
                                `;
        var move = true;
    }

    if (move) {
        const taskName = currentTask.querySelector('div').querySelector('h5').textContent;
        const taskDescription = currentTask.querySelector('div').querySelector('span').textContent;
        const newTaskDivision = `<div class="m-3 bg-${bgColor}-200 border border-gray-200 rounded-lg shadow">
                                        <div class="flex flex-col items-center py-4">
                                            <h5 class="mb-1 text-xl font-medium text-gray-900">${taskName}</h5>
                                            <span class="text-sm text-gray-500">${taskDescription}</span>
                                            <div class="flex mt-4 space-x-3 md:mt-6">
                                                ${buttonSection}
                                            </div>
                                        </div>
                                    </div>`;
        console.log(newTaskDivision);
        updatedTask.insertAdjacentHTML('beforeend', newTaskDivision);
        currentTask.remove();
        move = false;
    }

    if (event.target.classList.contains('delete-task-btn')) {
        currentTask.remove();
    }
});

let completedTask = document.querySelector('#completed-list');
completedTask.addEventListener('click', (event) => {
    const currentTask = event.target.parentElement.parentElement.parentElement;

    if (event.target.classList.contains('move-to-progress-btn')) {
        var updatedTask = document.querySelector('#progress-list');
        var bgColor = 'green';
        var buttonSection = `<button data-tooltip-target="tooltip-1" type="button" title="Move to ToDo"
                                    class="move-to-todo-btn text-red-400 bg-white border-2 border-red-400 focus:outline-none hover:bg-red-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">◄</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Move to Completed"
                                    class="move-to-completed-btn text-gray-400 bg-white border-2 border-gray-400 focus:outline-none hover:bg-gray-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">✔</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Delete Task"
                                    class="delete-task-btn text-white bg-red-500 border-2 border-red-400 focus:outline-none hover:bg-red-600 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">▬</button>
                                `;
        var move = true;
    }
    else if (event.target.classList.contains('move-to-todo-btn')) {
        var updatedTask = document.querySelector('#todo-list');
        var bgColor = 'red';
        var buttonSection = `<button data-tooltip-target="tooltip-1" type="button" title="Move to In Progress"
                                    class="move-to-progress-btn text-green-400 bg-white border-2 border-green-400 focus:outline-none hover:bg-green-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">►</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Move to Completed"
                                    class="move-to-completed-btn text-gray-400 bg-white border-2 border-gray-400 focus:outline-none hover:bg-gray-200 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">✔</button>
                                <button data-tooltip-target="tooltip-1" type="button" title="Delete Task"
                                    class="delete-task-btn text-white bg-red-500 border-2 border-red-400 focus:outline-none hover:bg-red-600 font-bold rounded-full text-2xl px-2 text-center transition duration-150 ease-in-out">▬</button>
                                `;
        var move = true;
    }
    else if (event.target.classList.contains('delete-task-btn')) {
        currentTask.remove();
    }

    if (move) {
        const taskName = currentTask.querySelector('div').querySelector('h5').textContent;
        const taskDescription = currentTask.querySelector('div').querySelector('span').textContent;
        const newTaskDivision = `<div class="m-3 bg-${bgColor}-200 border border-gray-200 rounded-lg shadow">
                                        <div class="flex flex-col items-center py-4">
                                            <h5 class="mb-1 text-xl font-medium text-gray-900">${taskName}</h5>
                                            <span class="text-sm text-gray-500">${taskDescription}</span>
                                            <div class="flex mt-4 space-x-3 md:mt-6">
                                                ${buttonSection}
                                            </div>
                                        </div>
                                    </div>`;
        console.log(newTaskDivision);
        updatedTask.insertAdjacentHTML('beforeend', newTaskDivision);
        currentTask.remove();
        move = false;
    }

    if (event.target.classList.contains('delete-task-btn')) {
        currentTask.remove();
    }
});
