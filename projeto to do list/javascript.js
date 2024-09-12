let taskList = []; //declara um array vazio taskList para armazenar as tarefas.

document.getElementById('add-task-btn').addEventListener('click', addTask); //adiciona um ouvinte de eventos ao botão com o id add-task-btn, que chama a função addTask quando for clicado.

function addTask() { //define a função addTask, que é chamada quando o botão "Add Task" é clicado.
    let taskInput = document.getElementById('task-input'); //limpa o valor do campo de entrada de texto.
    let task = taskInput.value.trim(); // o valor do campo de entrada de texto, remove espaços em branco e atribui a variável task.

    if (task) { //verifica se a variável task não está vazia. Se não estiver vazia, o código dentro da instrução if é executado.
        taskList.push(task);
        taskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    let taskListElement = document.getElementById('task-list'); // me dau  ma referência ao elemento <ul> com o id task-list
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        let taskElement = document.createElement('li');
        taskElement.textContent = task;
        taskElement.addEventListener('click', () => {  //adiciona um ouvinte de eventos ao elemento <li>, que remove a tarefa do array
            taskList.splice(index, 1);
            renderTaskList(); //chama a função renderTaskList para inicializar a lista de tarefas.
        });
        taskListElement.appendChild(taskElement); //adiciona o novo elemento dentro de um elemento ,o elemento<li> ao elemento <ul>.
    });
}

renderTaskList(); // chamar a funçao para inicializar  a lista de tarefas